import React from 'react';
const ARTICLE_NAME = "MacBook 16-inch Fan Noise (2019)";
const BY = "antalkon";
const DATE = "2/7/2020";

class News extends React.Component {



    render () {
        return <div>
            <div>{ARTICLE_NAME}</div>
            <div>{`${BY} ${DATE}, 2:13 PMwith 78 comments`  }  , 2:13 PMwith 78 comments</div>
        </div>
    }
}

export default News;