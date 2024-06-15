'use client'
import React, { useState, useEffect } from "react";
import liff from "@line/liff";

export default function Home() {
  const [username, setUsername] = useState("");
  const [userId, setUserId] = useState("");
  const [userStatus, setUserStatus] = useState("");
  const [userPic, setUserPic] = useState("");

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        await liff.ready;
        const profile = await liff.getProfile();
        setUserId(profile.userId);
        setUsername(profile.displayName);
        setUserPic(profile.pictureUrl || "");
        setUserStatus(profile.statusMessage || "");
      } catch (err) {
        console.error("Error fetching user profile", err);
      }
    };

    fetchUserProfile();
  }, []);

  const logout = async () => {
    await liff.logout();
  };

  return (
    <main>
      <h1>Hello {username}</h1>
      <h2>Your status is {userStatus}</h2>
      <img src={userPic} alt="User Profile Pic" />
      <p>UID: {userId}</p>
      <button onClick={logout}>Log out</button>
    </main>
  );
}
