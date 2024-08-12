import Image from "next/image";
import { Inter } from "next/font/google";
import { GetServerSideProps } from "next";
import { Avatar } from "@/components/Avatar";
import { Stories } from "@/types/stories";
import { FC, useCallback, useMemo, useState } from "react";
import { Container } from "@/components/Container";
import { StoryPreview } from "@/components/StoryPreview";

const inter = Inter({ subsets: ["latin"] });

interface Props {
  stories: Stories;
}

const Home: FC<Props> = ({ stories }) => {
  const [state, setState] = useState({ visibleStoryIndex: -1, imageIndex: -1 });

  const showStory = useCallback((storyIndex: number) => {
    setState((prevState) => ({
      ...prevState,
      visibleStoryIndex: storyIndex,
      imageIndex: -1,
    }));
  }, []);
  const hideStory = useCallback(() => {
    setState((prevState) => ({ ...prevState, visibleStoryIndex: -1 }));
  }, []);

  const showPreviousStory = useCallback(() => {
    let prevStoryIndex = 0;
    let prevImageIndex = -1;
    if (state.visibleStoryIndex > 0) {
      prevStoryIndex = state.visibleStoryIndex - 1;
      prevImageIndex = stories[prevStoryIndex].stories.length - 1;
    }
    setState((prevState) => ({
      ...prevState,
      visibleStoryIndex: prevStoryIndex,
      imageIndex: prevImageIndex,
    }));
  }, [state.visibleStoryIndex, stories]);

  const showNextStory = useCallback(() => {
    let nextStoryIndex = -1;
    if (state.visibleStoryIndex < stories.length - 1) {
      nextStoryIndex = state.visibleStoryIndex + 1;
    }
    setState((prevState) => ({
      ...prevState,
      visibleStoryIndex: nextStoryIndex,
      imageIndex: -1,
    }));
  }, [stories.length, state.visibleStoryIndex]);

  const storyToShow = useMemo(() => {
    if (state.visibleStoryIndex > -1) {
      return stories[state.visibleStoryIndex];
    }
  }, [state.visibleStoryIndex, stories]);

  return (
    <main
      className={inter.className}
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        backgroundColor: "white",
      }}
    >
      <p
        style={{
          color: "black",
          fontSize: 24,
          fontStyle: "italic",
          fontWeight: 600,
          padding: 8,
        }}
      >
        Instagram
      </p>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 20,
          position: "relative",
          overflowX: "auto",
          padding: 8,
        }}
      >
        {stories?.map((story, storyIndex) => {
          const openStory = () => {
            showStory(storyIndex);
          };

          return (
            <Container
              key={`story-avatar-${storyIndex}`}
              onClick={openStory}
              style={{ alignItems: "center", gap: 8 }}
            >
              <Avatar imgUrl={story.userPicture} />
              <p style={{ color: "black" }}>{story.userName}</p>
            </Container>
          );
        })}
      </div>
      {storyToShow ? (
        <StoryPreview
          key={`story-${state.visibleStoryIndex}`}
          name={`story-${state.visibleStoryIndex}`}
          story={storyToShow}
          showPreviousStory={showPreviousStory}
          showNextStory={showNextStory}
          prevImageIndex={state.imageIndex}
          hideStory={hideStory}
        />
      ) : (
        <></>
      )}
    </main>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  // const baseUrl = "http://localhost:3000" // use for development
  const baseUrl = "https://insta-story-fawn.vercel.app";

  try {
    const apiUrl = `${baseUrl}/api/stories`;
    const res = await fetch(apiUrl);

    if (!res.ok) {
      throw new Error("Failed to fetch");
    }

    const stories: Stories = await res.json();

    return {
      props: {
        stories,
      },
    };
  } catch (error) {
    console.error(error);

    return {
      props: {
        stories: [],
      },
    };
  }
};
