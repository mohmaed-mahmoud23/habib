import React, { useState } from 'react';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from './FirePas'; // تأكد من أن هذا المسار صحيح
import { useNavigate } from 'react-router';

const LoginPg = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const login = (e) => {
        e.preventDefault();

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // تم تسجيل الدخول بنجاح
                const user = userCredential.user;
                console.log("User logged in:", user);
                // يمكنك هنا الانتقال إلى ChekOut أو الصفحة الرئيسية
                alert("Login successful!");
                navigate("/ChekOut"); // الانتقال إلى صفحة ChekOut فقط إذا كان تسجيل الدخول ناجحًا
            })
            .catch((error) => {
                // في حالة وجود خطأ
                console.error("Error logging in:", error.message);
                setEmail(""); // إعادة تعيين البريد الإلكتروني
                setPassword(""); // إعادة تعيين كلمة المرور
                alert("Login failed. Please check your credentials or register first."); // رسالة توضح الفشل في تسجيل الدخول
                navigate("/RegisterPg"); // توجيه المستخدم إلى صفحة التسجيل
            });
    };                     

    return (
        <div>
            <h1>Login Page</h1>
            <form onSubmit={login}>
                <h1>Login</h1>
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
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default LoginPg;
