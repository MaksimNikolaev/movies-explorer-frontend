import './SearchForm.css';

const SearchForm = () => {
  return (
    <section className='search'>
      <form className='search__form' method='POST'>
        <input type='text' className='search__name' placeholder='Фильм'></input>
        <button type='submit' className='search__btn'>Найти</button>
        <label className="search__checkbox-container">
	        <input type="checkbox" id='search__checkbox'/>
	        <span className="search__checkbox-span"></span>
          <label htmlFor="search__checkbox" className='search__label'>Короткометражки</label>
        </label>     
      </form>
    </section>
  )
}

export default SearchForm;
