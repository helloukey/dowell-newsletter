import { useDispatch, useSelector } from "react-redux";
import {
  addEmail,
  addTopic,
  addType,
} from "../redux/slices/addSubscriberSlice";
import { Link } from "react-router-dom";
import { useAddSubscriberMutation } from "../redux/api/subscribersApi";
import { useEffect } from "react";

const AddSubscribers = () => {
  const { email, topic, type } = useSelector(
    (state: {
      addSubscriber: { email: string; topic: string; type: string };
    }) => {
      return state.addSubscriber;
    }
  );
  const dispatch = useDispatch();
  const [addSubscriber, { isLoading, data, error }] =
    useAddSubscriberMutation();

  // Handle Form Submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addSubscriber({
      type: "subscribe",
      data: { topic: topic, subscriberEmail: email, typeOfSubscriber: type },
    });
  };

  // Reset Form
  useEffect(() => {
    if (data || error) {
      dispatch(addEmail(""));
      dispatch(addTopic(""));
      dispatch(addType(""));
    }
  }, [data, error, dispatch]);

  return (
    <div className="w-full py-20 px-4 sm:px-8 md:px-16 lg:px-20">
      <div className="w-full max-w-lg mx-auto flex items-center justify-between mb-8">
        <h1 className="text-2xl font-semibold">Add Subscriber:</h1>
        <Link to="/" className="link no-underline hover:underline">
          {"« Back"}
        </Link>
      </div>
      <div className="card shrink-0 w-full max-w-lg shadow-md bg-base-100 mx-auto mb-20">
        <form className="card-body" onSubmit={handleSubmit}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
              value={email}
              onChange={(e) => dispatch(addEmail(e.target.value))}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Topic</span>
            </label>
            <input
              type="text"
              placeholder="Topic"
              className="input input-bordered"
              required
              value={topic}
              onChange={(e) => dispatch(addTopic(e.target.value))}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Type</span>
            </label>
            <input
              type="text"
              placeholder="Type"
              className="input input-bordered"
              required
              value={type}
              onChange={(e) => dispatch(addType(e.target.value))}
            />
          </div>
          <div className="form-control mt-6">
            <button
              className="btn btn-neutral"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? "Adding..." : "Add Subscriber"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddSubscribers;
