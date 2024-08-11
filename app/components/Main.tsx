"use client";

export function Main() {
  const handleLogin = () => {
    console.log("Login");
  };

  return (
    <div>
      <input type="text" />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
