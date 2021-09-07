import React from 'react'
import Part from './Part'



const Course = () => {
    const courses = [
        {
            name: 'Half Stack application development',
            id: 1,
            parts: [
                {
                    name: 'Fundamentals of React',
                    exercises: 10,
                    id: 1
                },
                {
                    name: 'Using props to pass data',
                    exercises: 7,
                    id: 2
                },
                {
                    name: 'State of a component',
                    exercises: 14,
                    id: 3
                },
                {
                    name: 'Redux',
                    exercises: 11,
                    id: 4
                }
            ]
        },
        {
            name: 'Node.js',
            id: 2,
            parts: [
                {
                    name: 'Routing',
                    exercises: 3,
                    id: 1
                },
                {
                    name: 'Middlewares',
                    exercises: 7,
                    id: 2
                }
            ]
        }
    ]




    const Header = ({ name }) => {
        return (
            <h1>{name}</h1>
        )
    }



    const Content = () => {
        return (
            <div>
                {courses.map(course => {
                    return (<div key={course.id}>
                        <Header name={course.name} />
                        {course.parts.map(part => <div key={part.id}><Part part={part} /></div>)}
                        <Total course={course} />
                    </div>)

                })}
            </div>
        )
    }

    const Total = ({ course }) => {
        return (
            <div>
                <h4>Total of {course.parts.reduce((acc, cur) => acc + cur.exercises, 0)} exercises</h4>
            </div>
        )
    }






    return (
        <div>
            <Content />
        </div>
    )
}



export default Course
