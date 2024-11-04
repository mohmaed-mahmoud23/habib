import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from './FirePas'; // استيراد auth من ملف التهيئة
import { useNavigate } from 'react-router';
import LoginPg from './LoginPg';

const RegisterPg = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate(); // تصحيح اسم الدالة

    const signUp = (e) => {
        e.preventDefault();
        
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // تم إنشاء المستخدم بنجاح
                const user = userCredential.user;
                navigate("/login"); // الانتقال إلى صفحة تسجيل الدخول

                console.log("User created:", user);
                alert("Account created successfully!");

            })
            .catch((error) => {
                // في حالة وجود خطأ
                console.error("Error creating user:", error.message);
                alert(error.message);
            });
    };

    return (
        <div>
            <h1>Register Page</h1>
            <form onSubmit={signUp}>
                <h1>Create Account</h1>
                <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
};

export default RegisterPg;
