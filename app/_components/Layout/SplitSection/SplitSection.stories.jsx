import SplitSection from "./SplitSection";

const meta = {
  title: "Layout/SplitSection",
  component: SplitSection,
};

export default meta;

export const Default = () => (
  <SplitSection>
    <h2>Section Content</h2>
  </SplitSection>
);

// export const Default = {
//   args: {
//     fullscreen: false,
//   },
// };

export const FullScreen = {
  args: {
    fullscreen: true,
  },
};
