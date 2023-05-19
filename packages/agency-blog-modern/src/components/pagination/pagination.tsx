import * as React from 'react';
import { Link } from 'gatsby';
import { IoMdArrowRoundBack, IoMdArrowRoundForward } from 'react-icons/io';
import {
  PaginationWrapper,
  PrevPage,
  NextPage,
  PageNumber,
} from './pagination.style';

type PaginationProps = {
  prevLink?: string | undefined | null | boolean;
  nextLink?: string | undefined | null | boolean;
  currentPage: string;
  totalPage: string;
  className?: string;
};

const Pagination: React.FunctionComponent<PaginationProps> = ({
  prevLink,
  nextLink,
  currentPage,
  totalPage,
  className,
  ...props
}) => {
  return (
    <PaginationWrapper {...props} className={className}>
      <PrevPage>
        {prevLink && (
          <Link to={`${prevLink}`} aria-label="Önceki">
            <IoMdArrowRoundBack />
          </Link>
        )}
      </PrevPage>

      <PageNumber>{`${currentPage} / ${totalPage}`}</PageNumber>

      <NextPage>
        {nextLink && (
          <Link to={`${nextLink}`} aria-label="Sonraki">
            <IoMdArrowRoundForward />
          </Link>
        )}
      </NextPage>
    </PaginationWrapper>
  );
};

export default Pagination;
