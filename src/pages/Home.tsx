import { useCoctailQuery } from '../hooks/useCoctailQuery';
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardAction } from "@/components/ui/card";
import { Link } from 'react-router-dom';

function Home() {
  const { isLoading, isError, data } = useCoctailQuery({ id: '11000' });
  const coctail = data?.data;

  if (isLoading) return <div className="text-center">Loading...</div>;
  if (isError) return <div className="text-center text-red-500">Error loading cocktail data!</div>;

  return (
    <div className="flex flex-col items-center w-full">
      <h1 className="text-3xl font-bold mb-8">Welcome to Cocktail Paradise</h1>
      <Card className='w-full max-w-md'>
        <CardHeader className='items-center justify-center text-center'>
          <CardTitle>{coctail?.name}</CardTitle>
          <CardDescription>{coctail?.category}</CardDescription>
        </CardHeader>
        <CardAction className='flex flex-col items-center justify-center'>
          <img className="rounded-xl w-2/3 mb-4" src={coctail?.imageUrl} alt={coctail?.name} />
          <div className='text-center my-3 font-thin text-sm'>{coctail?.instructions}</div>
          <Button asChild>
            <Link to="/about">Read more</Link>
          </Button>
        </CardAction>
      </Card>
    </div>
  );
}

export default Home;
