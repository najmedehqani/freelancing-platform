import {
  MagnifyingGlassIcon,
  XMarkIcon,
  ArrowLeftIcon,
} from "@heroicons/react/24/outline";
import ButtonIcon from "./ButtonIcon";
import { useState } from "react";
import { useSearchParams, useLocation, useNavigate } from "react-router-dom";

export default function Search({ className = "", pathname: customPathname }) {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const currentPath = customPathname || pathname;

  const urlSearchValue = searchParams.get("search") || "";
  const [value, setValue] = useState(urlSearchValue);
  const [prevSearchValue, setPrevSearchValue] = useState(urlSearchValue);
  if (urlSearchValue !== prevSearchValue) {
    setPrevSearchValue(urlSearchValue);
    setValue(urlSearchValue);
  }

  const formSubmit = (e) => {
    e.preventDefault();
    const searchValue = value.trim();
    const newParams = new URLSearchParams(searchParams.toString());
    if (searchValue) {
      newParams.set("search", searchValue);
    } else {
      newParams.delete("search");
    }

    navigate(currentPath + "?" + newParams.toString());
  };
  const clearInput = () => {
    setValue("");
    const newParams = new URLSearchParams(searchParams.toString());
    newParams.delete("search");
    navigate(currentPath + "?" + newParams.toString());
  };

  return (
    <form
      role="search"
      className={`relative transition-all duration-300 ease-out  ${className}`}
      onSubmit={formSubmit}
    >
      <input
        aria-label="جستجوی پروژه یا مهارت"
        type="text"
        name="search"
        placeholder="عنوان پروژه یا مهارت را جستجو کنید..."
        autoComplete="off"
        className="textField__input py-3.5 sm:py-4 text-xs pr-10 pl-12 rounded-3xl bg-secondary-50 border border-secondary-200"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        aria-label="جستجو"
        type="submit"
        className="absolute left-2 top-1/2 ml-[1px] -translate-y-1/2 flex items-center bg-primary-500 hover:bg-primary-600 transition-all duration-300 w-9 h-9 sm:w-11 sm:h-11 rounded-full justify-center"
      >
        <ArrowLeftIcon
          className="h-5 w-5 text-secondary-100"
          aria-hidden="true"
        />
      </button>
      {value ? (
        <ButtonIcon
          aria-label="پاک کردن جستجو"
          type="button"
          variant="outline"
          onClick={clearInput}
          className="absolute right-3 top-1/2 -translate-y-1/2 border-none"
        >
          <XMarkIcon className="h-4 w-4" aria-hidden="true" />
        </ButtonIcon>
      ) : (
        <MagnifyingGlassIcon
          className="w-5 h-5 text-secondary-400 absolute right-3 top-1/2 -translate-y-1/2"
          aria-hidden="true"
        />
      )}
    </form>
  );
}
