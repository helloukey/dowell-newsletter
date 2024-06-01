import { Link } from "react-router-dom";
import {
  useGetSubscribersListQuery,
  useRemoveSubscriberMutation,
} from "../redux/api/subscribersApi";
import { useEffect } from "react";
import { Subscriber } from "../types/subscribers";

const Subscribers = () => {
  const { data, error, isLoading } =
    useGetSubscribersListQuery("subscriberlist");
  const [removeSubscriber, { data: removeData, isLoading: removeIsLoading }] =
    useRemoveSubscriberMutation();

  // Reload on removeData
  useEffect(() => {
    if (removeData) {
      window.location.reload();
    }
  }, [removeData]);

  // Loader Component
  if (isLoading) {
    return (
      <div className="flex justify-center">
        <div className="loading my-20 mx-4"></div>
      </div>
    );
  }

  // Error Component
  if (error) {
    return (
      <div className="flex justify-center">
        <div className="alert alert-error my-20 mx-4">
          Error fetching data 😥
        </div>
      </div>
    );
  }

  // Handle Remove Subscriber
  const handleRemoveSubscriber = async (
    topic: string,
    email: string,
    type: string
  ) => {
    // Remove Subscriber
    removeSubscriber({
      type: "unsubscribe",
      data: {
        topic: topic,
        subscriberEmail: email,
        typeOfSubscriber: type,
        reasonToUnsubscribe: "User Unsubscribed",
      },
    });
  };

  return (
    <div className="w-full py-20 px-4 sm:px-8 md:px-16 lg:px-20">
      <div className="w-full max-w-2xl mx-auto flex items-center justify-between mb-8">
        <h1 className="text-2xl font-semibold">Subscribers:</h1>
        <Link to="/" className="link no-underline hover:underline">
          {"« Back"}
        </Link>
      </div>
      {/* Table */}
      <div className="overflow-x-auto mx-auto max-w-2xl">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
              <th>Type</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* rows */}
            {data.Details.data
              .filter(
                (subscriber: Subscriber) => subscriber.subscriberStatus === true
              )
              .map((subscriber: Subscriber, index: number) => (
                <tr key={subscriber._id}>
                  <th>{index + 1}</th>
                  <td>{subscriber.subscriberEmail}</td>
                  <td>{subscriber.typeOfSubscriber}</td>
                  <td>
                    <button
                      className={`btn btn-sm btn-error text-white ${
                        removeIsLoading ? "loading" : ""
                      }`}
                      onClick={() =>
                        handleRemoveSubscriber(
                          subscriber.topic,
                          subscriber.subscriberEmail,
                          subscriber.typeOfSubscriber
                        )
                      }
                      disabled={removeIsLoading}
                    >
                      Unsubscribe
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Subscribers;
