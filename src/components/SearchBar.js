import React from 'react';

class SearchBar extends React.Component {
  onInputChange(term) {
    this.props.onTermChange(term);
  }

  render() {
    return (
      <div className="search">
        <h1 className="intro"> Welcome to GifHunter!<br/>Start typing to start finding the best moving images to express exactly how you feel!</h1>
        <input placeholder="Need inspiration? Search for your favorite TV show!" onChange={event => this.onInputChange(event.target.value)} />
      </div>
    );
  }
}

export default SearchBar;


