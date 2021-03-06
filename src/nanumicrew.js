import { Link,Router } from 'react-router-dom';

const NanumiCrewDiv = () => {
    return (
        <div className="h-full static container mx-auto text-gray-600 text-center">
            <div className="w-full md:pt-40 pt-20">
                <div className="ml-3 text-4xl font-bold">
                    <span className="text-gray-500 text-4xl">나누미크루</span>
                </div>
                <div className="ml-3 mt-5">
                    <p>
                        재능러들이 모이면 어떻게 될까? <br/>
                        재능러들이 가진 재능으로 사회에 공헌한다면 어떻게 될까? <br/>
                        넘치는 재능을 나누고자하는 당신! <br/>
                        재능러s Assemble!<br/>
                    </p>
                </div>
            </div>
            <div className="w-full mt-5 py-5 font-bold flex justify-evenly">
                <Link to="/naisuBlog/nanumicrew/join"><span className="border-b border-white pb-2 hover:border-gray-400">크루 가입 신청</span></Link>
                <Link to="/naisuBlog/nanumicrew/nanum"><span className="border-b border-white pb-2 hover:border-gray-400">나눔 신청</span></Link>
                <Link to="/naisuBlog/nanumicrew/qna"><span className="border-b border-white pb-2 hover:border-gray-400">크루 관련 문의</span></Link>
            </div>


        </div> 
    )
}

export default NanumiCrewDiv;