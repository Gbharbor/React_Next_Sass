const Greeting = ({ hour }: GreetingProps) => {
    let greeting = '';
    if (hour >= 0 && hour < 12) {
      greeting = 'Good Morning';
    } else if (hour >= 12 && hour < 18) {
      greeting = 'Good Afternoon';
    } else if (hour >= 18 && hour <= 23) {
      greeting = 'Good Evening';
    }
    return <div className="text-5xl font-bold">{greeting}</div>;
  };
export default Greeting;  