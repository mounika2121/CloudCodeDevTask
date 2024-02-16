import { TiArrowSortedDown } from "react-icons/ti";
import {useState} from 'react';
import './index.css';

const Courses = () => {
    const [dropdownClicked, setDropdownClicked] = useState(false);

    const onClickCategory = () => {
        setDropdownClicked(prevState => !prevState);
    }

    return (
        <div className="category-top-container">
            <div className="category-container">
                <span className="category-name">Category</span>
                <button type="button" className="dropdown-arrow-button" onClick={onClickCategory}>
                    <TiArrowSortedDown color="white"/>
                </button>
            </div>
            {dropdownClicked && (
                    <ul className="category-dropdown-ul">
                        <li className="category-dropdown-li">
                            <a href="#1-2-1" target="_self" className="li-link">1-2-1</a>
                        </li>
                        <li className="category-dropdown-li">
                            <a href="#Accelerator Program" target="_self" className="li-link">Accelerator Program</a>
                        </li>
                        <li className="category-dropdown-li">
                            <a href="#Career Growth Combos" target="_self" className="li-link">Career Growth Combos</a>
                        </li>
                        <li className="category-dropdown-li">
                            <a href="#Data Science" target="_self" className="li-link">Data Science</a>
                        </li>
                        <li className="category-dropdown-li">
                            <a href="#Diwali Carnival" target="_self" className="li-link">Diwali Carnival</a>
                        </li>
                        <li className="category-dropdown-li">
                            <a href="#Finance" target="_self" className="li-link">Finance</a>
                        </li>
                        <li className="category-dropdown-li">
                            <a href="#Language" target="_self" className="li-link">Language</a>
                        </li>
                        <li className="category-dropdown-li">
                            <a href="#Marketing" target="_self" className="li-link">Marketing</a>
                        </li>
                    </ul>
            )}
        </div>
    )
}

export default Courses
