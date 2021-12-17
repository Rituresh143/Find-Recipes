import React from "react";

const SearchBar = ({
    value,
    isLoading,
    handleSubmit,
    onChange
}) => {
    return (
        <form onSubmit={handleSubmit}>
            <input
                value={value}
                disable={isLoading}
                onChange={onChange}
                placeholder="Search Recipes"
                className="from-control"
            />
            <input
              disabled={isLoading || !value}
              type="submit"
              className="btn"
              value="Search"
              />

        </form>
    )
};

export default  SearchBar;
