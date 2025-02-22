"use client";

import React from "react";
import Avatar from "@/features/userprofile/avatar/ui/Avatar";
import Info from "@/features/userprofile/info/ui/Info";
import Links from "@/features/userprofile/links/ui/Links";
import Name from "@/features/userprofile/name/ui/Name";
import styles from "./Profile.module.css";

const Profile = () => {
  return (
    <div className={styles.Container}>
      <Avatar size="medium" />
      <div className={styles.InfoWrapper}>
        <Name size="medium" />
        <Info />
        <Links />
      </div>
    </div>
  );
};

export default Profile;
