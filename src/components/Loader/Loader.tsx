import { BarLoader, PulseLoader } from "react-spinners";
import ClipLoader from "react-spinners/ClipLoader";

interface LoadPulse {
  loading: boolean;
}

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

const Loader = ({ loading }: LoadPulse) => {
    return (
    <div>
      <PulseLoader
        color="blue"
        loading={loading}
        cssOverride={override}
        size={16}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}
export default Loader;
