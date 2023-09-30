import React from 'react';
import { Link } from 'react-router-dom';

const TandC = () => {
    return (
        <div className=' shadow rounded-3 mt-3 w-75 mx-auto p-5 mb-5'>
            <h3>Terms and Conditions</h3>
            <p className=''>
                <small>
                    **Terms and Conditions for Mentor Finder Program on Social Networking Site**

                    These Terms and Conditions ("Terms") govern your use of the Mentor Finder Program on the social networking site ("Platform"). By accessing or using the Mentor Finder Program, you agree to comply with these Terms. Please read them carefully.

                    **1. Acceptance of Terms**

                    By using the Mentor Finder Program, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use the Mentor Finder Program.

                    **2. Eligibility**

                    You must be at least 18 years old to use the Mentor Finder Program. By using the Program, you confirm that you are of legal age to form a binding contract.

                    **3. Mentor Finder Program**

                    The Mentor Finder Program is a service provided by the Platform that allows users to connect with mentors and seek guidance in various fields or subjects.

                    **4. User Responsibilities**

                    4.1. **Accurate Information**: You must provide accurate and complete information when using the Mentor Finder Program, including your profile information and mentorship preferences.

                    4.2. **Respect and Professionalism**: Users must treat mentors and fellow users with respect and professionalism at all times. Harassment, hate speech, discrimination, or any form of inappropriate conduct is strictly prohibited.

                    4.3. **Confidentiality**: Users must respect the confidentiality of any information shared during mentorship interactions and not disclose any sensitive or private information of other users.

                    **5. Mentor Responsibilities**

                    5.1. **Qualifications**: Mentors must have the qualifications and expertise in the field they are offering mentorship in.

                    5.2. **Honesty**: Mentors must provide accurate information about their qualifications and experience.

                    5.3. **Professionalism**: Mentors must treat mentees with respect and professionalism, providing guidance and support within the scope of the mentorship relationship.

                    **6. Program Rules**

                    6.1. **Prohibited Content**: Users may not post or share content that is illegal, harmful, offensive, or violates any applicable laws or regulations.

                    6.2. **No Endorsement**: The Platform does not endorse any mentor or guarantee the accuracy, quality, or effectiveness of mentorship provided.

                    6.3. **Feedback**: Users are encouraged to provide feedback on mentorship experiences to help improve the program.

                    **7. Privacy**

                    Your use of the Mentor Finder Program is subject to the Platform's Privacy Policy, which outlines how your personal information is collected, used, and shared.

                    **8. Termination**

                    The Platform reserves the right to suspend or terminate your access to the Mentor Finder Program at its discretion, with or without notice, for any violation of these Terms.

                    **9. Disclaimer**

                    The Mentor Finder Program is provided "as is" and without any warranty. The Platform is not responsible for the actions or conduct of users, mentors, or the outcome of mentorship relationships.

                    **10. Changes to Terms**

                    The Platform may update these Terms at any time. Continued use of the Mentor Finder Program after changes constitute acceptance of the revised Terms.

                    **11. Contact Information**

                    If you have any questions or concerns about these Terms or the Mentor Finder Program, please contact us at [contact email or link].

                    By using the Mentor Finder Program, you acknowledge that you have read, understood, and agree to these Terms and Conditions.
                </small>
            </p>

            <Link className='btn btn-outline-dark' to={'/register'}>Register</Link>
        </div>
    );
};

export default TandC;