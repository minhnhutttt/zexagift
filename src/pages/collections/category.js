import React, {useEffect} from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import { StaticImage } from 'gatsby-plugin-image';
import Breadcrumb from "../../components/breadcrumb/breadcrumb"
import CollectionBoxItem from "../../components/collections/collectionBoxItem";
import Button from "../../components/Button";
import { initAccordion } from "../../hook/accordion";

const CategoryPage = () => {
    useEffect(() => {
        initAccordion();
      }, []);
    useEffect(() => {
        const body = document.querySelector('body');
        const filterBtn = document.querySelector('.mobile-filter-btn');
        const filterNav = document.querySelector('.mobile-filter');
        const filterClose = document.querySelector('.mobile-filter-close');

        function fOpen() {
            filterNav.classList.toggle('is-open');
            body.classList.toggle('overflow-hidden');
        }

        function fClose() {
            filterNav.classList.toggle('is-open');
            body.classList.toggle('overflow-hidden');
        }

        function fOutsideClose(e) {
            if (e.target === filterNav) {
                filterNav.classList.toggle('is-open');
                body.classList.toggle('overflow-hidden');
            }
        }

        function active1() {
            filterItem1.classList.toggle('is-active');
        }

        function active2() {
            filterItem3.classList.toggle('is-active');
        }

        filterBtn.addEventListener('click', fOpen);
        filterClose.addEventListener('click', fClose);
        document.addEventListener('click', fOutsideClose);

        const filterItem1 = document.querySelector('.filter-open-1');
        const filterItem2 = document.querySelector('.filter-close-1');
        filterItem1.addEventListener('click', active1);
        filterItem2.addEventListener('click', active1);

        const filterItem3 = document.querySelector('.filter-open-2');
        const filterItem4 = document.querySelector('.filter-close-2');
        filterItem3.addEventListener('click', active2);
        filterItem4.addEventListener('click', active2);

        // Clean up function to remove event listeners
        return () => {
            filterBtn.removeEventListener('click', fOpen);
            filterClose.removeEventListener('click', fClose);
            document.removeEventListener('click', fOutsideClose);
            filterItem1.removeEventListener('click', active1);
            filterItem2.removeEventListener('click', active1);
            filterItem3.removeEventListener('click', active2);
            filterItem4.removeEventListener('click', active2);
        };
    }, []);
    return (
        <Layout>
            <Breadcrumb
                items={[
                    { label: 'Home', link: '/' },
                    {
                        label: 'VRゴーグル' }
                ]}
            />
            <div className="relative overflow-hidden rounded-[0.8rem] max-w-[120rem] mx-auto">
                <StaticImage src="../../images/collections/vrgoggles/view_bg01.png" className=" w-full max-md:w-[90%] max-md:block max-md:aspect-[2.4/1] max-md:object-cover max-md:object-[left_center] max-md:m-auto max-md:rounded-[0.8rem]" alt="VRゴーグル" />
                <h1 className="text-[3.6rem] absolute text-white flex items-center justify-center inset-0 max-md:static max-md:text-[2.8rem] max-md:mt-12">VRゴーグル</h1>
                </div>
    
            <div className="mt-32 max-md:mt-24 max-md:px-[5%] max-md:py-0 max-w-[120rem] mx-auto">
                <div className="flex items-center justify-between relative z-20 max-md:block">
                    <div className="mobile-filter-btn block text-[#080d1b] flex items-center justify-center mb-16 p-[1.6rem] rounded-[0.8rem] bg-[#acacac] md:hidden">
                            <svg className="theme-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M20 5L13 11V15L7 20V11L0 5V0H20V5ZM11 14.0632L9 15.7299V10.0801L4.23985 6H15.7602L11 10.0801V14.0632ZM2 4V2H18V4H2Z" fill="#000000"></path>
                            </svg>
                            <span>フィルターと並べ替え</span>
                        </div>
                    <div className="w-[22rem] text-[#acacac] max-md:text-[1.6rem] max-md:w-auto max-md:text-center max-md:mb-16">
                            <p>5 製品</p>
                        </div>
                        <div className="flex items-center justify-between flex-[1] ml-8 max-md:block max-md:ml-0">
                        <div className="flex items-center">
                                <div className="collection-head__state__tag group">
                                <a href="#" className="group-hover:after:opacity-100 group-hover:before:scale-[1.075] after:content-[''] after:absolute after:w-[1.2rem] after:h-[1.2rem] after:opacity-40 after:-translate-y-2/4 after:transition-opacity after:duration-[0.3s] after:ease-[ease] after:right-8 after:top-2/4 before:content-[''] before:absolute before:origin-center before:transition-transform before:duration-[0.3s] before:ease-[ease] before:rounded-[0.8rem] before:border before:border-solid before:border-[rgba(172,172,172,0.3)] before:inset-0 inline-block relative mr-8 pl-8 pr-[4.2rem] py-[1.8rem]">
                                        <span>在庫あり</span>
                                    </a>
                                </div>
                            <div className="relative inline-block font-semibold before:content-[''] before:absolute before:w-full before:h-px before:transition-transform before:duration-[0.3s] before:ease-[ease] before:origin-[left_center] before:scale-100 before:left-0 before:top-[calc(100%_+_3px)] before:bg-[#acacac] hover:before:scale-x-0 hover:before:scale-y-100">
                                    <a href="#">
                                        <span>すべてクリア</span>
                                    </a>
                                </div>
                            </div>
                        <div className="collection-head__sort hover:after:opacity-100 forcus:bg-[#080d1b] forcus:border-[rgba(172,172,172,0.3)] hover:bg-[#080d1b] hover:border-[rgba(172,172,172,0.3)] relative box-border transition-[0.3s] duration-[ease] rounded-[0.8rem] border-solid border-[0.2rem] border-white bg-white max-md:hidden after:content-[''] after:absolute after:w-[1.2rem] after:h-[1.2rem] after:-translate-y-2/4 after:opacity-40 after:transition-[0.3s] after:duration-[ease] after:right-[1.2rem] after:top-2/4">
                            <label className="absolute text-base text-[#acacac] left-6 top-4">並び替え：</label>
                            <button className="collection-head__sort--btn leading-[1.8] appearance-none text-[#acacac] font-semibold cursor-pointer relative z-10 pl-6 pr-[3.7rem] pt-[2.3rem] pb-[0.4rem] border-[none]">価格の安い順</button>
                            <ul className="collection-head__sort__list block absolute right-[-0.2rem] translate-y-[-2rem] transition-[0.3s] duration-[ease] opacity-0 invisible pt-6 pb-10 px-8 rounded-[0.8rem] top-[calc(100%+1.7rem)] bg-[#192956]">
                                    <li className=" text-[1.6rem] whitespace-nowrap text-[#acacac] cursor-pointer mt-6 first:mt-[0.8rem]">
                                        <Button>オススメ</Button>
                                    </li>
                                    <li className=" text-[1.6rem] whitespace-nowrap text-[#acacac] cursor-pointer mt-6 first:mt-[0.8rem]">
                                        <Button>ベストセラー</Button>
                                    </li>
                                    <li className=" text-[1.6rem] whitespace-nowrap text-[#acacac] cursor-pointer mt-6 first:mt-[0.8rem]">
                                        <Button>アルファベット順, A-Z</Button>
                                    </li>
                                    <li className=" text-[1.6rem] whitespace-nowrap text-[#acacac] cursor-pointer mt-6 first:mt-[0.8rem]">
                                        <Button>アルファベット順, Z-A</Button>
                                    </li>
                                    <li className=" text-[1.6rem] whitespace-nowrap text-[#acacac] cursor-pointer mt-6 first::mt-[0.8rem]">
                                        <Button>価格の安い順</Button>
                                    </li>
                                    <li className=" text-[1.6rem] whitespace-nowrap text-[#acacac] cursor-pointer mt-6 first::mt-[0.8rem]">
                                        <Button>価格の高い順</Button>
                                    </li>
                                    <li className=" text-[1.6rem] whitespace-nowrap text-[#acacac] cursor-pointer mt-6 first::mt-[0.8rem]">
                                        <Button>古い商品順</Button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                <div className="flex justify-between mt-16">
                    <div className="w-[22rem] max-md:hidden">
                        <dl className="text-[#acacac]">
                                <dt className="collection-filter__summary side-summary [&.is-open]:after:rotate-180 [&.is-open]:after:pb-8 after:static after:block after:w-[1.2rem] after:h-[1.2rem] after:opacity-40 after:transition-opacity after:duration-[0.3s] after:ease-[ease] after:right-0 after:top-[0.8rem] transition-[0.3s] duration-[ease] relative cursor-pointer flex items-center justify-between py-12 border-t border-solid border-t-[rgba(172,172,172,0.3)] is-open">
                                    <h5 className="collection-filter__summary--head">出品状況</h5>
                                </dt>
                                <dd className="collection-filter__content side-content [&.is-open]:max-h-[var(--max-height)] [&.is-open]:opacity-100 [&.is-open]:mb-12 transition-[0.3s] duration-[ease] overflow-hidden max-h-0 opacity-0 is-open">
                                <div className="flex items-center justify-between">
                                    <div className="text-[#acacac]">0 選択済み</div>
                                        <div className="font-semibold relative inline-block content-[''] before:absolute before:w-full before:h-px before:transition-transform before:duration-[0.3s] before:ease-[ease] before:origin-[left_center] before:scale-100 before:left-0 before:top-[calc(100%_+_3px)] before:bg-[#acacac] hover:before:scale-x-0"><a href="#">リセット</a></div>
                                    </div>
                                <div className="mt-6">
                                    <div className="flex items-center justify-between">
                                            <label className="check-box">
                                                <input className="check-box__input" type="checkbox" />
                                                <div className="check-box__marker"></div>
                                                <div className="check-box__title">在庫あり</div>
                                                <div className="check-box__val">5</div>
                                            </label>
                                        </div>
                                    <div className="flex items-center justify-between">
                                            <label className="check-box disabled">
                                                <input className="check-box__input" type="checkbox" />
                                                <div className="check-box__marker"></div>
                                                <div className="check-box__title">在庫なし</div>
                                                <div className="check-box__val">0</div>
                                            </label>
                                        </div>
                                    </div>
                                </dd>
                            </dl>
                        <dl className="text-[#acacac] border-b border-solid border-b-[rgba(172,172,172,0.3)]">
                                <dt className="collection-filter__summary side-summary [&.is-open]:after:rotate-180 [&.is-open]:after:pb-8 after:static after:block after:w-[1.2rem] after:h-[1.2rem] after:opacity-40 after:transition-opacity after:duration-[0.3s] after:ease-[ease] after:right-0 after:top-[0.8rem] transition-[0.3s] duration-[ease] relative cursor-pointer flex items-center justify-between py-12 border-t border-solid border-t-[rgba(172,172,172,0.3)] is-open">
                                    <h5 className="side-summary--head text-[1.6rem] font-semibold leading-[1.4]">価格</h5>
                                </dt>
                                <dd className="collection-filter__content side-content [&.is-open]:max-h-[var(--max-height)] [&.is-open]:opacity-100 [&.is-open]:mb-12 transition-[0.3s] duration-[ease] overflow-hidden max-h-0 opacity-0 is-open">
                                <div className="flex items-center justify-between">
                                    <div className="text-[#acacac]">最高価格は ¥1,980</div>
                                        <div className="font-semibold relative inline-block content-[''] before:absolute before:w-full before:h-px before:transition-transform before:duration-[0.3s] before:ease-[ease] before:origin-[left_center] before:scale-100 before:left-0 before:top-[calc(100%_+_3px)] before:bg-[#acacac] hover:before:scale-x-0"><a href="#">リセット</a></div>
                                    </div>
                                    <div className="flex justify-between gap-4 mt-[1.6rem]">
                                        <div className="input-box">
                                            <input type="text" id="price-1" className="input-box__item" placeholder=" " />
                                            <label className="input-box__label" for="price-1">¥ から</label>
                                        </div>
                                        <div className="input-box">
                                            <input type="text" id="price-2" className="input-box__item" placeholder=" " />
                                            <label className="input-box__label" for="price-2">¥ に</label>
                                        </div>
                                    </div>
                                </dd>
                            </dl>
                        </div>
                        <div className="flex-[1] ml-8 max-md:ml-0">
                            <div className="flex flex-wrap max-md:justify-between">
                            <CollectionBoxItem title="オリジナルVRゴーグル" meta="ZEXAGIFT" price="¥1,980 JPY" />
                            <CollectionBoxItem title="オリジナルVRゴーグル" meta="ZEXAGIFT" price="¥1,980 JPY" loading />
                            <CollectionBoxItem title="オリジナルVRゴーグル" meta="ZEXAGIFT" price="¥1,980 JPY" />
                            <CollectionBoxItem title="オリジナルVRゴーグル" meta="ZEXAGIFT" price="¥1,980 JPY" />
                            <CollectionBoxItem title="オリジナルVRゴーグル" meta="ZEXAGIFT" price="¥1,980 JPY" />
                            </div>
                        </div>
                    </div>
                </div>
            <div class="mobile-filter block fixed z-[100] invisible overflow-hidden transition-[0.3s] duration-[ease] opacity-0 bg-[rgba(172,172,172,0.3)] inset-0 [&.is-open]:visible [&.is-open]:opacity-100 md:hidden group">
                <div class="flex flex-col h-full w-[calc(100%-60px)] max-w-[330px] -translate-x-full transition-[0.3s] duration-[ease] bg-[#080d1b] group-[.is-open]:translate-x-0">
                    <div class="flex items-center justify-between px-[5%] py-12">
                        <h3 class="text-[2.2rem]">フィルターと並べ替え</h3>
                        <div class="mobile-filter-close w-8">
                            <svg class="theme-icon w-full" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.5 10.0563L2.41421 16.1421L3.82843 17.5563L9.91421 11.4706L16.1421 17.6985L17.5563 16.2843L11.3284 10.0563L17.9706 3.41421L16.5563 2L9.91421 8.64214L3.41421 2.14214L2 3.55635L8.5 10.0563Z" fill="#acacac"></path>
                            </svg>
                        </div>
                    </div>
                    <div class="flex flex-col overflow-hidden relative flex-[1] px-[5%] py-0">
                        <div class="mobile-filter__nav--item">
                            <span class="filter-open text-[1.6rem] font-semibold flex items-center justify-between px-0 py-6 filter-open-1">
                                出品状況
                                <svg class="theme-icon" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.79289 6.20711L5 2.41421L6.41421 1L11.6213 6.20711L6.41421 11.4142L5 10L8.79289 6.20711Z" fill="#acacac"></path>
                                </svg>
                            </span>
                            <div class="filter-detail flex flex-col absolute w-full translate-x-full transition-transform duration-[0.3s] ease-[ease] z-10 right-0 inset-y-0 bg-[#080d1b]">
                                <h4 class="flex items-center text-[1.6rem] pt-[1.2rem] pb-[2.8rem] px-[5%] filter-close-1">
                                    <svg class="theme-icon mr-4" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.97392 8.94868L9.39195 5.48679L7.92399 4L2 10L7.92399 16L9.39195 14.5132L5.97392 11.0513H18V8.94868H5.97392Z" fill="#acacac"></path>
                                    </svg>
                                    出品状況
                                </h4>
                                <div class="pt-0 pb-4 px-[5%]">
                                    <label class="check-box">
                                        <input class="check-box__input" type="checkbox" />
                                        <div class="check-box__marker"></div>
                                        <div class="check-box__title">在庫あり</div>
                                        <div class="check-box__val">5</div>
                                    </label>
                                </div>
                                <div class="pt-0 pb-4 px-[5%]">
                                    <label class="check-box disabled">
                                        <input class="check-box__input" type="checkbox" />
                                        <div class="check-box__marker"></div>
                                        <div class="check-box__title">在庫なし</div>
                                        <div class="check-box__val">0</div>
                                    </label>
                                </div>
                                <div class="flex items-center justify-between mt-auto pt-0 pb-8 px-[5%]">
                                    <a class="font-semibold relative inline-block content-[''] before:absolute before:w-full before:h-px before:transition-transform before:duration-[0.3s] before:ease-[ease] before:origin-[left_center] before:scale-100 before:left-0 before:top-[calc(100%_+_3px)] before:bg-[#acacac] hover:before:scale-x-0">クリア</a>
                                    <a class="text-[1.6rem] font-semibold text-[#080d1b] px-8 py-[1.6rem] rounded-[0.8rem] bg-[#acacac]">申し込み</a>
                                </div>
                            </div>
                        </div>
                        <div class="mobile-filter__nav--item">
                            <span class="filter-open text-[1.6rem] font-semibold flex items-center justify-between px-0 py-6 filter-open-2">
                                価格
                                <svg class="theme-icon" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.79289 6.20711L5 2.41421L6.41421 1L11.6213 6.20711L6.41421 11.4142L5 10L8.79289 6.20711Z" fill="#acacac"></path>
                                </svg>
                            </span>
                            <div class="filter-detail flex flex-col absolute w-full translate-x-full transition-transform duration-[0.3s] ease-[ease] z-10 right-0 inset-y-0 bg-[#080d1b]">
                                <h4 class="flex items-center text-[1.6rem] pt-[1.2rem] pb-[2.8rem] px-[5%] filter-close-2">
                                    <svg class="theme-icon mr-4" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.97392 8.94868L9.39195 5.48679L7.92399 4L2 10L7.92399 16L9.39195 14.5132L5.97392 11.0513H18V8.94868H5.97392Z" fill="#acacac"></path>
                                    </svg>
                                    価格
                                </h4>
                                <div class="px-[5%] py-0">
                                    <div class="filter-detail__subtitle--val">最高価格は ¥1,980</div>
                                </div>
                                <div class="mt-8 px-[5%] py-0">
                                    <div class="input-box mt-8">
                                        <input type="text" id="price-1" class="input-box__item" placeholder=" " />
                                        <label class="input-box__label" for="price-1">¥ から</label>
                                    </div>
                                    <div class="input-box mt-8">
                                        <input type="text" id="price-2" class="input-box__item" placeholder=" " />
                                        <label class="input-box__label" for="price-2">¥ に</label>
                                    </div>
                                </div>
                                <div class="flex items-center justify-between mt-auto pt-0 pb-8 px-[5%]">
                                    <a class="text-[1.6rem] font-semibold relative inline-block content-[''] before:absolute before:w-full before:h-px before:transition-transform before:duration-[0.3s] before:ease-[ease] before:origin-[left_center] before:scale-100 before:left-0 before:top-[calc(100%_+_3px)] before:bg-[#acacac] hover:before:scale-x-0 ">クリア</a>
                                    <a class="text-[1.6rem] font-semibold text-[#080d1b] px-8 py-[1.6rem] rounded-[0.8rem] bg-[#acacac]">申し込み</a>
                                </div>
                            </div>
                        </div>
                        <div class="relative mt-10">
                            <select name="sort_by" class="mobile-filter__select--input font-semibold block w-full h-auto transition-[0.3s] duration-[ease] text-[#acacac] appearance-none pt-[2.7rem] pb-[0.8em] px-6 rounded-[0.8rem] border-[solid] border-white" id="sort-by-mobile">
                                <option value="manual">オススメ</option>
                                <option value="best-selling" selected="selected">ベストセラー</option>
                                <option value="title-ascending">アルファベット順, A-Z</option>
                                <option value="title-descending">アルファベット順, Z-A</option>
                                <option value="price-ascending">価格の安い順</option>
                                <option value="price-descending">価格の高い順</option>
                                <option value="created-ascending">古い商品順</option>
                                <option value="created-descending">新着順</option>
                            </select>
                            <label class="absolute transition-[0.1s] duration-[ease] -translate-y-2/4 origin-[left_center] text-[#acacac] left-[1.7rem] top-2/4" for="sort-by-mobile">並び替え：</label>
                        </div>
                        <div class="flex items-center justify-between mt-auto pt-0 pb-8 px-0">
                            <a class="text-[1.6rem] font-semibold relative inline-block content-[''] before:absolute before:w-full before:h-px before:transition-transform before:duration-[0.3s] before:ease-[ease] before:origin-[left_center] before:scale-100 before:left-0 before:top-[calc(100%_+_3px)] before:bg-[#acacac] hover:before:scale-x-0">すべてクリア</a>
                            <a class="text-[1.6rem] font-semibold text-[#080d1b] px-8 py-[1.6rem] rounded-[0.8rem] bg-[#acacac]">申し込み</a>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export const Head = () => <Seo title="Category" />

export default CategoryPage
