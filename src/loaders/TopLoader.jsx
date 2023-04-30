import ContentLoader from "react-content-loader";

const TopLoader = (props) => (
  <ContentLoader
    speed={2}
    width={400}
    height={400}
    viewBox="0 0 400 400"
    backgroundColor="#000000"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="1" y="-15" rx="0" ry="0" width="620" height="469" />
    <rect x="700" y="5" rx="0" ry="0" width="174" height="161" />
    <rect x="700" y="178" rx="0" ry="0" width="174" height="223" />
  </ContentLoader>
);

export default TopLoader;
