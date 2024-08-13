import { UserStory } from "@/types/stories";
import React, {
  FC,
  memo,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { Container } from "../Container";
import { FullBar } from "./FullBar";
import { AnimBar } from "./AnimBar";

interface StoryPreviewProps {
  story: UserStory;
  showPreviousStory: () => void;
  showNextStory: () => void;
  hideStory: () => void;
  name: string;
  prevImageIndex: number;
}

const StatusBar: FC<{ index: number; activeIndex: number }> = memo(
  ({ index, activeIndex }) => {
    return (
      <Container
        style={{ flex: 1, height: 6, backgroundColor: "grey", borderRadius: 3 }}
      >
        {index < activeIndex ? (
          <FullBar key={`fullbar-index-${index}-actveIndex-${activeIndex}`} />
        ) : (
          <></>
        )}
        {index === activeIndex ? (
          <AnimBar key={`animbar-index-${index}-actveIndex-${activeIndex}`} />
        ) : (
          <></>
        )}
      </Container>
    );
  }
);

const StoryPreview: FC<StoryPreviewProps> = ({
  story,
  showPreviousStory,
  showNextStory,
  hideStory,
  name,
  prevImageIndex,
}) => {
  const [imageIndex, setImageIndex] = useState(
    prevImageIndex > -1 ? prevImageIndex : 0
  );

  const showPrevImage = useCallback(() => {
    if (imageIndex === 0) {
      showPreviousStory();
    } else {
      setImageIndex(imageIndex - 1);
    }
  }, [imageIndex]);

  const showNextImage = useCallback(() => {
    if (story?.stories?.length === imageIndex + 1) {
      showNextStory();
    } else {
      setImageIndex(imageIndex + 1);
    }
  }, [imageIndex, story?.stories?.length]);

  const imageVisible = useMemo(() => {
    return story.stories[imageIndex];
  }, [story.stories, imageIndex]);

  const progressBar = useMemo(() => {
    const bars = [];
    // const barsData = [];
    for (let i = 0; i < story.stories.length; i++) {
      bars.push(
        <StatusBar
          key={`${name}-bar-${i}`}
          index={i}
          activeIndex={imageIndex}
        />
      );
      // barsData.push({ index: i, activeIndex: imageIndex });
    }
    return bars;
  }, [story.stories.length, imageIndex, name]);

  useEffect(() => {
    const timeout = setTimeout(showNextImage, 5000);
    return () => {
      clearTimeout(timeout);
    };
  }, [showNextImage, imageIndex]);

  return (
    <Container
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        backgroundImage:
          "linear-gradient(to bottom, #dc01b9, #e10c8d, #fa1d3c)",
      }}
    >
      <img
        src={imageVisible}
        style={{ width: "100%", height: "100%", objectFit: "contain" }}
      />
      <Container
        style={{ position: "absolute", width: "100%", height: "100%" }}
      >
        <Container
          style={{
            flexDirection: "row",
            alignItems: "center",
            margin: 8,
            gap: 8,
          }}
        >
          {progressBar.map((item) => item)}
        </Container>
        <Container
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 20,
            margin: 8,
          }}
        >
          <Container style={{ width: 40, height: 40, borderRadius: 20 }}>
            <img
              src={story.userPicture}
              style={{ width: 40, height: 40, objectFit: "cover" }}
            />
          </Container>
          <Container style={{ flex: 1 }}>
            <p>{story.userName}</p>
          </Container>
          <Container onClick={hideStory}>
            <svg
              className="svg-inline--fa fa-times fa-w-11"
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="times"
              role="img"
              viewBox="0 0 352 512"
              xmlns="http://www.w3.org/2000/svg"
              style={{ width: 24, height: 24, color: "black" }}
            >
              <path
                fill="currentColor"
                d="M242.7 256l104.5-104.5c12.5-12.5 12.5-32.8 0-45.3l-45.3-45.3c-12.5-12.5-32.8-12.5-45.3 0L152 165.7 47.5 61.2c-12.5-12.5-32.8-12.5-45.3 0l-45.3 45.3c-12.5 12.5-12.5 32.8 0 45.3L108.7 256 4.2 360.5c-12.5 12.5-12.5 32.8 0 45.3l45.3 45.3c12.5 12.5 32.8 12.5 45.3 0L152 306.3l104.5 104.5c12.5 12.5 32.8 12.5 45.3 0l45.3-45.3c12.5-12.5 12.5-32.8 0-45.3L242.7 256z"
              ></path>
            </svg>
          </Container>
        </Container>
        <Container style={{ flexDirection: "row", flex: 1 }}>
          <Container data-testid='show-prev-preview' style={{ flex: 1 }} onClick={showPrevImage} />
          <Container data-testid='show-next-preview' style={{ flex: 1 }} onClick={showNextImage} />
        </Container>
      </Container>
    </Container>
  );
};

export { StoryPreview };
