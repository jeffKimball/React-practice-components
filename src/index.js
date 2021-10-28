import React from 'react'
import ReactDOM from 'react-dom'
import faker from 'faker'
import CommentDetail from './CommentDetail'
import ApprovalCard from './ApprovalCard'


const App = () => {
    return(
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail 
                    userPic={faker.image.avatar()} 
                    author={faker.name.firstName()} 
                    timeAgo="Today at 4:45PM" 
                    blogPost="Good post"
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    userPic={faker.image.avatar()} 
                    author={faker.name.firstName()} 
                    timeAgo="Today at 12:55PM" 
                    blogPost="Cool blog, bruh"
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    userPic={faker.image.avatar()} 
                    author={faker.name.firstName()}
                    timeAgo="Yesterday at 1:14PM" 
                    blogPost="Do you even blog?"
                />
            </ApprovalCard>
            
        </div>  
        )
}

ReactDOM.render(<App />, document.querySelector('#root'))