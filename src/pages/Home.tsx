import { Link } from "react-router-dom";

type Props = {};

const Home = (props: Props) => {
  return (
    <div className="w-full py-20 px-4 sm:px-8 md:px-16 lg:px-20">
      <div className="w-full max-w-2xl mx-auto mb-20">
        {/* Box 1 and Box 2 */}
        <div className="flex flex-col w-full lg:flex-row lg:mb-8">
          <Link to="/subscribers" className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center hover:shadow-md font-medium">
            Subscribers
          </Link>
          <div className="divider lg:divider-horizontal"></div>
          <Link to="/add" className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center hover:shadow-md font-medium">
            Add Subscribers
          </Link>
          <div className="divider lg:divider-horizontal lg:hidden"></div>
        </div>
        {/* Box 3 and Box 4 */}
        <div className="flex flex-col w-full lg:flex-row">
          <Link to="/send" className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center hover:shadow-md font-medium">
            Send Newsletter
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
