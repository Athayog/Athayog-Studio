// store/useFormStore.ts
import { create } from 'zustand';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '@/lib/firebase';

interface FormState {
    loading: boolean;
    error: string | null;
    success: boolean;
    setLoading: (loading: boolean) => void;
    setError: (error: string | null) => void;
    setSuccess: (success: boolean) => void;
    submitForm: (formData: unknown, collectionName: string, apiUrl?: string) => Promise<void>;
}

const useFormStore = create<FormState>((set) => ({
    loading: false,
    error: null,
    success: false,
    setLoading: (loading) => set({ loading }),
    setError: (error) => set({ error }),
    setSuccess: (success) => set({ success }),

    submitForm: async (formData, collectionName, apiUrl) => {
        set({ loading: true, error: null, success: false });
        try {
            // Save form data to Firebase
            await addDoc(collection(db, collectionName), formData);

            // If API URL is provided, submit form data to third-party API
            if (apiUrl) {
                const response = await fetch(apiUrl, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(formData),
                });

                if (!response.ok) {
                    // Log third-party API error to Firebase
                    await addDoc(collection(db, 'formErrors'), {
                        formData,
                        error: 'Failed to submit form to API',
                        timestamp: new Date(),
                    });
                }
            }
            set({ success: true });
        } catch (error) {
            // Log Firebase errors and set local state
            console.error('Error submitting form:', error);
            set({ error: 'Failed to submit form. Please try again later.' });
        } finally {
            set({ loading: false });
        }
    },
}));

export default useFormStore;
