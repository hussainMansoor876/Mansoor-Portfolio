import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { projectsData } from '@/utils/data/projects-data';

function AllProject() {
  return (
    <>
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            ALL Project
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectsData?.map((project) => (
          <div
            key={project?.id}
            className="relative rounded-lg bg-gradient-to-r from-[#0a0d37] to-[#0d1224] border border-[#1b2c68a0] shadow-lg"
          >
            <div className="flex flex-row">
              <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
              <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
            </div>
            <div className="h-44 mt-15 mb-5 lg:h-52 w-full cursor-pointer overflow-hidden rounded-t-lg relative">
              <Image
                src={project?.image}
                height={1080}
                width={1920}
                alt={project?.name || 'Project Image'}
                className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="px-4 lg:px-8 py-3 lg:py-5 relative">
              <Link target='_blank' href={project?.website_url}>
                <p className="text-center text-[#16f2b3] mb-5 text-base lg:text-xl font-semibold hover:text-violet-500">
                  {project?.name}
                </p>
              </Link>
              <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-0 py-0 lg:py-8">
                <code className="font-mono text-xs md:text-sm lg:text-base">
                  <div className="blink">
                    <span className="mr-2 text-pink-500">const</span>
                    <span className="mr-2 text-white">project</span>
                    <span className="mr-2 text-pink-500">=</span>
                    <span className="text-gray-400">{'{'}</span>
                  </div>
                  <div>
                    <span className="ml-4 lg:ml-8 mr-2 text-white">name:</span>
                    <span className="text-gray-400">{`'`}</span>
                    <span className="text-amber-300">{project?.name}</span>
                    <span className="text-gray-400">{`',`}</span>
                  </div>
                  <div className="ml-4 lg:ml-8 mr-2">
                    <span className="text-white">tools:</span>
                    <span className="text-gray-400">{` ['`}</span>
                    {project?.tools?.map((tag, i) => (
                      <React.Fragment key={i}>
                        <span className="text-amber-300">{tag}</span>
                        {project?.tools?.length - 1 !== i && (
                          <span className="text-gray-400">{`', '`}</span>
                        )}
                      </React.Fragment>
                    ))}
                    <span className="text-gray-400">{"],"}</span>
                  </div>
                  <div>
                    <span className="ml-4 lg:ml-8 mr-2 text-white">myRole:</span>
                    <span className="text-orange-400">{project?.role}</span>
                    <span className="text-gray-400">,</span>
                  </div>
                  <div className="ml-4 lg:ml-8 mr-2">
                    <span className="text-white">Description:</span>
                    <span className="text-cyan-400">{' ' + project?.description}</span>
                    <span className="text-gray-400">,</span>
                  </div>
                  <div><span className="text-gray-400">{`};`}</span></div>
                </code>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>

  );
}

export default AllProject;
