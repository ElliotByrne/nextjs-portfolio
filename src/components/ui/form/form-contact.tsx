"use client";

import Link from "next/link";
// import {
//   CheckIcon,
//   ClockIcon,
//   CurrencyDollarIcon,
//   UserCircleIcon,
// } from "@heroicons/react/24/outline";
import { Button } from "../button";
import { createInvoice } from "@/lib/actions";
import { useFormState } from "react-dom";
import { ErrorMessage } from "./error-message";

export default function Form() {
  const initialState = {};

  const [state, dispatch] = useFormState(createInvoice, initialState);

  return (
    <form action={dispatch}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        {/* Invoice Amount */}
        <div className="mb-4">
          <label htmlFor="name" className="mb-2 block text-sm font-medium">
            Name
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Joe Bloggs"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
            </div>
            {/* <ErrorMessage errors={state?.name?.amount} label="amount" /> */}
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="mb-2 block text-sm font-medium">
            Email
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="email"
                name="email"
                type="email"
                placeholder="example@gmail.com"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
            </div>
            {/* <ErrorMessage errors={state?.name?.amount} label="amount" /> */}
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="mb-2 block text-sm font-medium">
            Message
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <textarea
                id="message"
                name="message"
                placeholder="Hey Elliot, I'm getting in touch with you because..."
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
            </div>
            {/* <ErrorMessage errors={state?.name?.amount} label="amount" /> */}
          </div>
        </div>
      </div>

      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Clear
        </Link>
        <Button type="submit">Send message</Button>
      </div>
    </form>
  );
}
