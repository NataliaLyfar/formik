export const LoginForm = () => {
    const handleSubmit = (e) => {
        
    }
    return (
        <form autoComplete="off" onSubmit={handleSubmit}>
            <label htmlFor="login">Login
            <input type="text" name="login"/>
            </label>
            <label htmlFor="password">Password
            <input type="password" name="password"/>
            </label>
            <button type="submit">Submit</button>
        </form>

    )
};