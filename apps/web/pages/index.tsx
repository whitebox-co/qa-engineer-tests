/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from 'next/image'

export default function Index() {
   const router = useRouter();
  return (
    <>
      <section className="header relative pt-16 items-center flex h-screen max-h-860-px">
        <div className="container mx-auto items-center flex flex-wrap">
          <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
            <div className="pt-32 sm:pt-0">
              <h2 className="font-semibold text-4xl text-blueGray-600">
                Whitebox - QA Engineer Test Site
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                This site is intended as a sandbox for QA Engineer Candidates to use
                to create automated and manual testing against.

                It is assumed that that QA Engineer has basic git, github and Cypress experience. To get 
                started click on the admin Dashboard below to see the testing site.
              </p>
              <div className="mt-12">
                <Link legacyBehavior href="/admin/dashboard">
                  <a
                    href="#pablo"
                    className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-400 active:bg-blueGray-500 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                  >
                    Admin Dashboard
                  </a>
                </Link>
                <a
                  href="https://github.com/whitebox-co/qa-engineer-tests"
                  className="github-star ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg"
                  target="_blank"
                >
                  Github Repository
                </a>
              </div>
            </div>
          </div>
        </div>
        <img
          className="absolute top-0 b-auto right-0 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-10/12 max-h-860-px"
          src="/img/pattern_nextjs.png"
          alt="..."
        />
      </section>
    </>
  );
}
