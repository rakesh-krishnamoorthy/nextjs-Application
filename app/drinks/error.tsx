'use client';
import { FC } from "react";

interface ErrorProps {
    error: Error;
  }

const error: FC<ErrorProps> = ({ error }) => {
    console.log(error);
    return(
        <div>
            <h1 className="text-3xl">{ error.message }</h1>
        </div>
    )
}

export default error;
