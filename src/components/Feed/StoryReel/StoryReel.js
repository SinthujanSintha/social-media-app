import React from 'react'
import Story from './Story/Stroy'
import './StoryReel.css'
const StoryReel = () => {
    return (
        <div className='storyReel'>
            <Story
                image='https://image.shutterstock.com/image-photo/3d-wallpaper-design-waterfall-sea-600w-1380925703.jpg'
                profileSrc='https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'
                title='Sinthujan' />
            <Story
                image='https://image.shutterstock.com/image-illustration/drawn-exotic-tropical-leaves-on-600w-1937890231.jpg'
                profileSrc='https://images.unsplash.com/photo-1566753323558-f4e0952af115?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8
                MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=922&q=80'
                title='Saru' />
            <Story
                image='https://image.shutterstock.com/image-photo/colorful-flower-on-dark-tropical-600w-721703848.jpg'
                profileSrc='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG
                90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80'
                title='Karan' />
            <Story
                image='https://image.shutterstock.com/image-photo/agave-cactus-abstract-natural-pattern-600w-1056037874.jpg'
                profileSrc='https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxw
                aG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80'
                title='Tharachu' />
            <Story
                image='https://image.shutterstock.com/image-photo/leaf-texture-background-blue-toned-600w-637240591.jpg'
                profileSrc='https://images.unsplash.com/photo-1521146764736-56c929d59c83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwa
                G90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80'
                title='Suji' />
        </div>
    )
}

export default StoryReel
