'use client';
import React, { useEffect, useState } from 'react';
import useAuthStore from '../../store/useAuthStore';
import { auth } from '../../lib/firebase';
import { signInWithGoogle, signOut } from '../../lib/auth';

function Page() {
    const { setUser, setLoading } = useAuthStore();
    const { user, loading } = useAuthStore();
    const [error, setError] = useState<string | null>(null);
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setUser(user);
            setLoading(false);
        });

        return () => unsubscribe();
    }, [setUser, setLoading]);

    const handleSignIn = async () => {
        try {
            await signInWithGoogle();
        } catch (err) {
            setError('Failed to sign in');
        }
    };
    if (loading) return <p>Loading...</p>;
    return (
        <div style={{ marginTop: '300px' }}>
            <div>
                {user ? (
                    <div>
                        <p>Welcome, {user.displayName}</p>
                        <button onClick={signOut}>Sign Out</button>
                    </div>
                ) : (
                    <div>
                        <button onClick={handleSignIn}>Sign In with Google</button>
                        {error && <p>{error}</p>}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Page;
