import { useEffect, useState } from "react";
// importing the Params
import { useParams } from "react-router-dom";
import axios from "axios";

const UserDetails = () => {
// Destructuring id from Params
  const {id} = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch data based on the user ID from the URL
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => console.error("Error fetching user details:", error));
  }, [id]); // id as dependency to re-render if the 'id' changes

  if (!user) {
    return <div className="text-center my-10">Loading...</div>;
  }

  return (
    <div className="container mx-auto my-10">
      <h1 className="text-3xl font-bold mb-4">{user.name}s Details</h1>
      <div className="p-6 border rounded shadow">
        <p><strong>Username:</strong> {user.username}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Phone:</strong> {user.phone}</p>
        <p><strong>Website:</strong> <a href={`http://${user.website}`} className="text-blue-500 hover:underline">{user.website}</a></p>
        <p><strong>Address:</strong> {user.address.street}, {user.address.city}</p>
        <p><strong>Company:</strong> {user.company.name}</p>
      </div>
    </div>
  );
};

export default UserDetails;
