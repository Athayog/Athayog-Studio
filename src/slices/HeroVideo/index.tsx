import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';
import { ActionButton, ContentBox, Gradient, HeadingTitle, HeroContainer, SubTitle, videoStyles } from '@/slices/HeroVideo/styles';
/**
 * Props for `HeroVideo`.
 */
export type HeroVideoProps = SliceComponentProps<Content.HeroVideoSlice>;

/**
 * Component for "HeroVideo" Slices.
 * 
 
 */

const HeroVideo = ({ slice }: HeroVideoProps): JSX.Element => {
    debugger;
    return (
        <section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
            <HeroContainer>
                <video autoPlay loop muted playsInline style={videoStyles as React.CSSProperties}>
                    <source src={slice.primary.videourl || ''} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <Gradient />
                <ContentBox>
                    <HeadingTitle variant="h1">{slice.primary.title}</HeadingTitle>
                    <SubTitle>{slice.primary.subtitle}</SubTitle>
                    <ActionButton variant="contained">{slice.primary.button}</ActionButton>
                </ContentBox>
            </HeroContainer>
        </section>
    );
};

export default HeroVideo;
