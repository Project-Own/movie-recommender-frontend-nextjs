import React from "react";

import Link from "next/link";
import { Button } from "@material-ui/core";
export const Landing = () => {
  return (
    <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1 className="x-large">Movie Recommender</h1>
          <p className="lead">
            Alright! Alright! Alright! You come to a fine place if you are
            confused on what to watch next? We will help you to take the
            decision.
          </p>
          <div className="buttons">
            <Link href="/signup" className="btn btn-primary">
              <Button variant="contained"> Sign Up</Button>
            </Link>
            <Link href="/login" className="btn btn-light">
              <Button variant="contained"> Login</Button>
            </Link>
            <Link href="/select" className="btn btn-light">
              <Button variant="contained"> Selection</Button>
            </Link>
            <Link href="/dashboard" className="btn btn-light">
              <Button variant="contained"> Home</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Landing;
