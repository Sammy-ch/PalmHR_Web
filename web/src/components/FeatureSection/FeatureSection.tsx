import React from 'react'

import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from '@tabler/icons-react'

import { BentoGrid, BentoGridItem } from '../ui/bento-grid'

const Skeleton = () => (
  <div className="dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex h-full min-h-[6rem] w-full   flex-1 rounded-xl border  border-transparent bg-neutral-100 [mask-image:radial-gradient(ellipse_at_center,white,transparent)] dark:border-white/[0.2] dark:bg-black"></div>
)
const items = [
  {
    title: 'Employee Database Management',
    description:
      'Centralize all employee information in one secure location, including personal details, contact information, employment history, and performance records.',
    header: <Skeleton />,
    className: 'md:col-span-2 border border-slate-200 shadow-md text-lg',
    icon: <IconClipboardCopy className="h-8 w-8 text-neutral-500" />,
  },
  {
    title: 'Time and Attendance Tracking',
    description:
      'Monitor employee attendance, track hours worked, manage overtime, and ensure compliance with labor regulations using automated time-tracking tools.',
    header: <Skeleton />,
    className: 'md:col-span-1 border border-slate-200 shadow-md text-lg',
    icon: <IconFileBroken className="h-8 w-8 text-neutral-500" />,
  },
  {
    title: 'Performance Evaluation and Feedback',
    description:
      'Conduct regular performance reviews, set goals, provide feedback, and track progress to support employee development and enhance productivity.',
    header: <Skeleton />,
    className: 'md:col-span-1 border border-slate-200 shadow-md text-lg',
    icon: <IconSignature className="h-8 w-8 text-neutral-500" />,
  },
  {
    title: 'Payroll Processing and Management',
    description:
      'Automate payroll calculations, tax deductions, and direct deposits, ensuring accurate and timely payment to employees while maintaining compliance with tax regulations.',
    header: <Skeleton />,
    className: 'md:col-span-2 border border-slate-200 shadow-md text-lg',
    icon: <IconTableColumn className="h-8 w-8 text-neutral-500" />,
  },
]

const FeatureSection = () => {
  return (
    <div className="flex h-full flex-col items-center px-[15rem] py-10 ">
      <h2 className="header text-4xl">Features</h2>
      <p className="content pt-5 text-center text-lg">
        Our platform offers a wide range of powerful features to simplify HR
        tasks, enhance employee engagement, and drive organizational success.
        From employee database management and time tracking to recruitment,
        training, and compliance management, our app provides all the tools you
        need to effectively manage your workforce.{' '}
      </p>
      <section className=" pt-20">
        <BentoGrid className="max-w-8xl content mx-auto md:auto-rows-[20rem]">
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              className={item.className}
              icon={item.icon}
            />
          ))}
        </BentoGrid>
      </section>
    </div>
  )
}

export default FeatureSection
