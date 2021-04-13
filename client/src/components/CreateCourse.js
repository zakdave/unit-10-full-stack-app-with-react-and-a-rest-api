import React, { Component } from 'react';
import Form from './Form';

export default class CreateCourse extends Component {

    state = {
        courseTitle: '',
        courseDescription: '',
        courseAuthor: '',
        estimatedTime: '',
        materialsNeeded: '',
        errors: [],
    }

    render() {
        const {
            courseTitle,
            courseDescription,
            estimatedTime,
            materialsNeeded,
            errors,
        } = this.state;

        let courseAuthor = this.state.courseAuthor;
        const { context } = this.props;

        if (courseAuthor === '') {
            courseAuthor = `${context.authenticatedUser.firstName} ${context.authenticatedUser.lastName}`;
        }

        return (
            <main>
                <div className="wrap">
                    <h2>Create Course</h2>

                    <Form
                        cancel={this.cancel}
                        submit={this.submit}
                        errors={errors}
                        submitButtonText="Create Course"
                        elements={() => (
                            <React.Fragment>
                                <div>
                                    <label htmlFor="courseTitle">
                                        Course Title
                                            </label>
                                    <input
                                        id="courseTitle"
                                        name="courseTitle"
                                        type="text"
                                        value={courseTitle}
                                        onChange={this.change}
                                    />
                                    <label htmlFor="courseAuthor">
                                        Course Author
                                            </label>
                                    <input
                                        id="courseAuthor"
                                        name="courseAuthor"
                                        type="text"
                                        value={courseAuthor}
                                        onChange={this.change}
                                    />
                                    <label htmlFor="courseDescription">
                                        Course Description
                                            </label>
                                    <textarea
                                        id="courseDescription"
                                        name="courseDescription"
                                        value={courseDescription}
                                        onChange={this.change}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="estimatedTime">
                                        Estimated Time
                                            </label>
                                    <input
                                        id="estimatedTime"
                                        name="estimatedTime"
                                        type="text"
                                        value={estimatedTime}
                                        onChange={this.change}
                                    />
                                    <label htmlFor="materialsNeeded">
                                        Materials Needed
                                            </label>
                                    <textarea
                                        id="materialsNeeded"
                                        name="materialsNeeded"
                                        value={materialsNeeded}
                                        onChange={this.change}
                                    />
                                </div>

                            </React.Fragment>
                        )}
                    />
                </div>
            </main>
        );
    }

    change = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        this.setState(() => {
            return {
                [name]: value
            };
        });
    };

    submit = () => {
        const { context } = this.props;
        const userEmail = context.authenticatedUser.emailAddress;
        const password = context.authenticatedPassword;
        const userId = context.authenticatedUser.id

        const {
            courseTitle,
            courseDescription,
            estimatedTime,
            materialsNeeded,
        } = this.state;

        let title = courseTitle;
        let description = courseDescription;

        const course = {
            title,
            description,
            estimatedTime,
            materialsNeeded,
            userId
        };

        context.data.createCourse(course, userEmail, password)
            .then(errors => {
                if (errors.length) {
                    this.setState({ errors });
                } else {
                    this.props.history.push('/');
                }
            })
            .catch(err => {
                console.log(err);
                this.props.history.push('/error');
            });
    }
    cancel = () => {
        this.props.history.push('/');
    }
}