import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "India",
    streetAddress: "",
    city: "",
    state: "",
    postalCode: "",
    comments: false,
    candidate: false,
    offers: false,
    pushNotification:""
  });

  function changeHandler(event) {
    const { name, value, checked, type } = event.target;
    setFormData((prev) => {
      return { ...prev, [name]: type === "checkbox" ? checked : value };
    });
  }

  function submitHandler(event){
    event.preventDefault();
    console.log("Printing the form data");
    console.log(formData);
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">Registration Form</h1>
        <form className="space-y-4">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={changeHandler}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              id="firstName"
            />
          </div>

          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={changeHandler}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              id="lastName"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={changeHandler}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              id="email"
            />
          </div>

          <div>
            <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">Country</label>
            <select
              name="country"
              id="country"
              value={formData.country}
              onChange={changeHandler}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="India">India</option>
              <option value="USA">USA</option>
              <option value="UK">UK</option>
              <option value="UAE">UAE</option>
            </select>
          </div>

          <div>
            <label htmlFor="streetAddress" className="block text-sm font-medium text-gray-700 mb-1">Street Address</label>
            <input
              type="text"
              name="streetAddress"
              placeholder="Street Address"
              value={formData.streetAddress}
              onChange={changeHandler}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              id="streetAddress"
            />
          </div>

          <div>
            <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">City</label>
            <input
              type="text"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={changeHandler}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              id="city"
            />
          </div>

          <div>
            <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">State</label>
            <input
              type="text"
              name="state"
              placeholder="State"
              value={formData.state}
              onChange={changeHandler}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              id="state"
            />
          </div>

          <div>
            <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700 mb-1">Postal Code</label>
            <input
              type="number"
              name="postalCode"
              placeholder="Postal Code"
              value={formData.postalCode}
              onChange={changeHandler}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              id="postalCode"
            />
          </div>

          <fieldset className="border border-gray-300 rounded-md p-4">
            <legend className="text-sm font-medium text-gray-700 px-2">By Email</legend>
            <div className="space-y-3 mt-2">
              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="comments"
                  name="comments"
                  checked={formData.comments}
                  onChange={changeHandler}
                  className="mt-1 mr-2"
                />
                <div>
                  <label htmlFor="comments" className="text-sm font-medium text-gray-700">Comments</label>
                  <p className="text-sm text-gray-500">Get notified when someone posts a comment on a posting</p>
                </div>
              </div>

              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="candidate"
                  name="candidate"
                  checked={formData.candidate}
                  onChange={changeHandler}
                  className="mt-1 mr-2"
                />
                <div>
                  <label htmlFor="candidate" className="text-sm font-medium text-gray-700">Candidates</label>
                  <p className="text-sm text-gray-500">Get notified when a candidate applies for a job</p>
                </div>
              </div>

              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="offers"
                  name="offers"
                  checked={formData.offers}
                  onChange={changeHandler}
                  className="mt-1 mr-2"
                />
                <div>
                  <label htmlFor="offers" className="text-sm font-medium text-gray-700">Offers</label>
                  <p className="text-sm text-gray-500">Get notified when a candidate accepts or rejects an offer</p>
                </div>
              </div>
            </div>
          </fieldset>

          <fieldset className="border border-gray-300 rounded-md p-4">
            <legend className="text-sm font-medium text-gray-700 px-2">Push Notifications</legend>
            <p className="text-sm text-gray-500 mb-3">These are delivered via SMS to your mobile phone</p>
            <div className="space-y-2">
              <div className="flex items-center">
                <input 
                  type="radio" 
                  id="pushEverything" 
                  name="pushNotification" 
                  value="Everything" 
                  checked={formData.pushNotification === "Everything"}
                  onChange={changeHandler}
                  className="mr-2"
                />
                <label htmlFor="pushEverything" className="text-sm text-gray-700">Everything</label>
              </div>

              <div className="flex items-center">
                <input 
                  type="radio" 
                  id="pushEmail" 
                  name="pushNotification" 
                  value="Same as email" 
                  checked={formData.pushNotification === "Same as email"}
                  onChange={changeHandler}
                  className="mr-2"
                />
                <label htmlFor="pushEmail" className="text-sm text-gray-700">Same as Email</label>
              </div>

              <div className="flex items-center">
                <input 
                  type="radio" 
                  id="pushNothing" 
                  name="pushNotification" 
                  value="No Push Notification" 
                  checked={formData.pushNotification === "No Push Notification"}
                  onChange={changeHandler}
                  className="mr-2"
                />
                <label htmlFor="pushNothing" className="text-sm text-gray-700">No Push Notification</label>
              </div>
            </div>
          </fieldset>

          <button 
            type="submit" 
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200"
            onClick={submitHandler}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;