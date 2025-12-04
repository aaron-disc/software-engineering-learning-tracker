function ProfilePage() {
  return (
    <div className="page" style={{ padding: "2rem 5rem" }}>
      <header className="profile-header">
        <h1>User Profile</h1>
        <p>Manage your personal information and preferences</p>
      </header>
      <div className="stats-grid">
        <div className="stat-card first-column">
          <h2>Personal Information</h2>
          <p>
            <strong>Name:</strong>
          </p>
          <p>
            <strong>Email:</strong>
          </p>
          <p>
            <strong>Username:</strong>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
