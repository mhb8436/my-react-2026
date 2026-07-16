import { Link } from 'react-router-dom'
import BannerJson  from '../data/banners.json';
import type { Banner } from '../types/banner'

// .json 파일 임포트하면 java object 바꿔주지만 any 타입으로 들오기때문에
// 여기서 다시한번 Banner[] 타입으로 좁힙니다. 
const banners = BannerJson as Banner[];

export default function PromoBanners() {
    return (
        <section className='stack'>
            <div className='page-head'>
                <h1>기획전</h1>
            </div>
            <div className='product-grid'>
                {banners.map((b) => (
                    <div key={b.id} className='product-card'>
                        <Link to={b.href} className='card-link'>
                            <img className='thumb' src={b.image} />
                            <div className='body'>
                                <p className='p-name'>{b.title}</p>
                                <span className='muted'>{b.subtitle}</span>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    )
}