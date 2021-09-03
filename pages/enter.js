import { auth, googleAuthProvider } from "../lib/firebase";

export default function EnterPage(props) {
    const user = null;
    const username = null;

    // 1. user signed out <SignInButton />
    // 2. user signed in, but missing username <UsernameForm />
    // 3. user signed in, has username <SignOutButton />

    return (
        <main>
            {user ?
                !username ? <UsernameForm /> : <SignOutButton /> : <SignInButton />}
        </main>
    )
}

function SignInButton() {
    const signInWithGoogle = async () => {
        await auth.signInWithPopup(googleAuthProvider)
    }

    return (
        <button className='btn-google' onClick={signInWithGoogle}>
            <img src={'/google.png'} alt="" />Sign in with google
        </button>
    )
}

function SignOutButton() {
    return <button onClick={() => auth.signOut()}>Sign out</button>
}

function UsernameForm() {
    return null;
}