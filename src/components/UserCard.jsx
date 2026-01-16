

const UserCard = ({ user }) => {
  const { firstName, lastName, photoUrl, about ,age } = user;

  return (
    <div className="card w-96 bg-base-100 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl overflow-hidden border border-gray-200">
      {/* Image Section */}
      <figure className="relative h-72 w-full overflow-hidden">
        <img
          src={photoUrl}
          alt={`${firstName} ${lastName}`}
          className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <h2 className="absolute bottom-4 left-4 text-white text-2xl font-semibold drop-shadow-md">
          {firstName} {lastName}
        </h2>
      </figure>

      {/* Info Section */}
      <div className="card-body p-5">
        <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
          {about || "This user hasn’t written anything yet."}
        </p>
         <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
          {age || "Age not specified."}
        </p>

        <div className="card-actions justify-center mt-6">
          <button className="btn btn-secondary w-32 hover:scale-105 transition-transform duration-200">
            Interested
          </button>
          <button className="btn btn-outline btn-primary w-32 hover:scale-105 transition-transform duration-200">
            Ignore
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
