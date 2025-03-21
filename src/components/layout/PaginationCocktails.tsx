import React from 'react'
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
  } from "@/components/ui/pagination"

interface PaginationCocktailsProps {
    currentPage: number;
    lastPage: number;
    setPage: (page: number) => void;
}

function PaginationCocktails({currentPage, lastPage, setPage}: PaginationCocktailsProps) {

    if (lastPage <= 1) {
        return <div className='my-8'></div>
    }

    if (lastPage <= 6) {
        return (
            <Pagination className='my-8'>
                <PaginationContent>
                    <PaginationItem className="cursor-pointer">
                        <PaginationPrevious onClick={() => setPage(currentPage-1)} />
                    </PaginationItem>
                    {[...Array(lastPage)].map((_, index) => (
                        <PaginationItem key={index} className="cursor-pointer">
                            <PaginationLink onClick={() => setPage(index+1)} isActive={currentPage === index + 1}>
                                {index + 1}
                            </PaginationLink>
                        </PaginationItem>
                    ))}
                    <PaginationItem className="cursor-pointer">
                        <PaginationNext onClick={() => setPage(currentPage+1)} />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        )
    }

    if(currentPage <= 3) {
        return (
            <Pagination className='my-8'>
                <PaginationContent>
                    <PaginationItem className="cursor-pointer">
                        <PaginationPrevious onClick={() => setPage(currentPage-1)} />
                    </PaginationItem>
                    {[...Array(4)].map((_, index) => (
                        <PaginationItem key={index} className="cursor-pointer">
                            <PaginationLink onClick={() => setPage(index+1)} isActive={currentPage === index + 1}>
                                {index + 1}
                            </PaginationLink>
                        </PaginationItem>
                    ))}
                    <PaginationItem>
                        <PaginationEllipsis />
                    </PaginationItem>
                    <PaginationItem className="cursor-pointer">
                        <PaginationLink onClick={() => setPage(lastPage)}>
                            {lastPage}
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem className="cursor-pointer">
                        <PaginationNext onClick={() => setPage(currentPage+1)} />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        )
    }
        
    if(currentPage >= lastPage - 4) {
        return (
            <Pagination className='my-8'>
                <PaginationContent>
                    <PaginationItem className="cursor-pointer">
                        <PaginationPrevious onClick={() => setPage(currentPage-1)} />
                    </PaginationItem>
                    <PaginationItem className="cursor-pointer">
                        <PaginationLink onClick={() => setPage(1)}>
                            1
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationEllipsis />
                    </PaginationItem>
                    {[...Array(4)].map((_, index) => (
                        <PaginationItem key={index} className="cursor-pointer">
                            <PaginationLink onClick={() => setPage(lastPage - 3 + index)} isActive={currentPage === lastPage - 3 + index}>
                                {lastPage - 3 + index}
                            </PaginationLink>
                        </PaginationItem>
                    ))}
                    <PaginationItem className="cursor-pointer">
                        <PaginationNext onClick={() => setPage(currentPage+1)} />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        )
    }

    return (
        <Pagination className='my-8'>
          <PaginationContent>
            <PaginationItem className="cursor-pointer">
              <PaginationPrevious onClick={() => setPage(currentPage-1)} />
            </PaginationItem>
            <PaginationItem className="cursor-pointer">
              <PaginationLink onClick={() => setPage(1)}>1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem className="cursor-pointer">
              <PaginationLink onClick={() => setPage(currentPage-1)}>
                {currentPage - 1}
              </PaginationLink>
            </PaginationItem>
            <PaginationItem className="cursor-pointer">
              <PaginationLink onClick={() => setPage(currentPage)} isActive>
                {currentPage}
              </PaginationLink>
            </PaginationItem>
            <PaginationItem className="cursor-pointer">
              <PaginationLink onClick={() => setPage(currentPage+1)}>
                {currentPage + 1}
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem className="cursor-pointer">
              <PaginationLink onClick={() => setPage(lastPage)}>
                {lastPage}
              </PaginationLink>
            </PaginationItem>
            <PaginationItem className="cursor-pointer">
              <PaginationNext onClick={() => setPage(currentPage+1)} />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )
}

export default PaginationCocktails
