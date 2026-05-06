"use client";

/*
  This example demonstrates prop drilling.

  Prop drilling happens when data is passed through
  multiple components until it reaches the component
  that actually needs the information.

  This approach is completely valid, especially in
  smaller applications.
*/

// Subtitle props
type SubtitleProps = {
  label: string;
};

// Simple subtitle component
const Subtitle = ({ label }: SubtitleProps) => {
  return <p>{label}</p>;
};

// Title props
type TitleProps = {
  label: string;
};

// Title component
const Title = ({ label }: TitleProps) => {
  return (
    <h1 className="my-4 text-4xl font-bold">
      {label}
    </h1>
  );
};

// Header props
type HeaderProps = {
  title: string;
  subtitle: string;
};

// Intermediate component
const Header = ({
  title,
  subtitle,
}: HeaderProps) => {
  return (
    <header>
      {/* Prop forwarding */}
      <Title label={title} />
      <Subtitle label={subtitle} />
    </header>
  );
};

const Page = () => {
  // Source of the data
  const pageInfo = {
    title: "Cool Title",
    subtitle: "Very nice subtitle",
  };

  return (
    <div className="container mx-auto">
      {/* Passing data to Header */}
      <Header
        title={pageInfo.title}
        subtitle={pageInfo.subtitle}
      />
    </div>
  );
};

export default Page;

/*
==========================================================
  CLASS 11: Prop Drilling Basics
==========================================================

This lesson demonstrates how data can be passed
through multiple components using props.

Concepts covered:
- Props
- Component composition
- Data flow in React
- Intermediate components
- Prop drilling

As applications grow, repeatedly forwarding props
through many layers can become difficult to manage,
which motivates solutions like Context API.
*/