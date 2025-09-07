import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Eye, Lock, Database, Users, Mail, FileText, CheckCircle, Globe, Shield } from "lucide-react";

const PrivacyPolicy = () => {
    const [activeSection, setActiveSection] = useState('');
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);

        const handleScroll = () => {
            const sections = document.querySelectorAll('[data-section]');
            let current = '';

            sections.forEach(section => {
                const rect = section.getBoundingClientRect();
                if (rect.top <= 100 && rect.bottom >= 100) {
                    current = section.getAttribute('data-section');
                }
            });

            setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.querySelector(`[data-section="${sectionId}"]`);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    const handleBackClick = () => {
        window.history.back();
    };

    const sections = [
        { id: 'overview', title: 'Overview', icon: Eye },
        { id: 'information', title: 'Information We Collect', icon: Database },
        { id: 'usage', title: 'How We Use Information', icon: Users },
        { id: 'sharing', title: 'Information Sharing', icon: Globe },
        { id: 'security', title: 'Data Security', icon: Shield },
        { id: 'rights', title: 'Your Rights', icon: CheckCircle },
        { id: 'contact', title: 'Contact Us', icon: Mail }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-primary/5">
            <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 py-4 sm:py-6 md:py-8">
                <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
                        <Button
                            variant="ghost"
                            size="sm"
                            className="hover:bg-primary/10 w-fit text-sm sm:text-base px-3 py-2"
                            onClick={handleBackClick}
                        >
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Back
                        </Button>
                    </div>

                    <div className="text-center mb-8 sm:mb-12 md:mb-16">
                        <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-primary/10 rounded-full mb-4 sm:mb-6 animate-bounce">
                            <Lock className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-primary" />
                        </div>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                            Privacy Policy
                        </h1>
                        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-2xl md:max-w-3xl mx-auto px-4 leading-relaxed">
                            Your privacy is important to us. Learn how we collect, use, and protect your information.
                        </p>
                        <div className="mt-4 sm:mt-6 text-sm sm:text-base text-muted-foreground">
                            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                        </div>
                    </div>
                </div>

                <div className="space-y-6 sm:space-y-8">
                    <Card
                        data-section="overview"
                        className="overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border-primary/20"
                    >
                        <CardHeader className="bg-gradient-to-r from-primary/10 to-primary/5 p-4 sm:p-6">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-primary/20 rounded-lg">
                                    <Eye className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                                </div>
                                <CardTitle className="text-xl sm:text-2xl md:text-3xl">Overview</CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent className="p-4 sm:p-6 lg:p-8">
                            <p className="text-muted-foreground leading-relaxed mb-6 text-sm sm:text-base">
                                At CrackIT-X, we are committed to protecting your privacy and ensuring the security of your personal information.
                                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our
                                offline quiz application and related services.
                            </p>
                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                                    <CheckCircle className="w-5 h-5 text-green-600 mb-3" />
                                    <h4 className="font-semibold text-green-800 dark:text-green-300 text-sm sm:text-base">Data Protection</h4>
                                    <p className="text-xs sm:text-sm text-green-600 dark:text-green-400">We implement industry-standard security measures</p>
                                </div>
                                <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                                    <Shield className="w-5 h-5 text-blue-600 mb-3" />
                                    <h4 className="font-semibold text-blue-800 dark:text-blue-300 text-sm sm:text-base">Transparency</h4>
                                    <p className="text-xs sm:text-sm text-blue-600 dark:text-blue-400">Clear information about data collection and usage</p>
                                </div>
                                <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-800 sm:col-span-2 lg:col-span-1">
                                    <Users className="w-5 h-5 text-purple-600 mb-3" />
                                    <h4 className="font-semibold text-purple-800 dark:text-purple-300 text-sm sm:text-base">User Control</h4>
                                    <p className="text-xs sm:text-sm text-purple-600 dark:text-purple-400">You have control over your personal data</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card
                        data-section="information"
                        className="overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border-primary/20"
                    >
                        <CardHeader className="bg-gradient-to-r from-primary/10 to-primary/5 p-4 sm:p-6">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-primary/20 rounded-lg">
                                    <Database className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                                </div>
                                <CardTitle className="text-xl sm:text-2xl md:text-3xl">Information We Collect</CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent className="p-4 sm:p-6 lg:p-8">
                            <div className="space-y-4 sm:space-y-6">
                                <div className="p-4 bg-muted/30 rounded-lg border-l-4 border-primary">
                                    <h4 className="font-semibold mb-3 flex items-center gap-2 text-sm sm:text-base">
                                        <Users className="w-4 h-4" />
                                        Personal Information
                                    </h4>
                                    <p className="text-muted-foreground text-sm sm:text-base">
                                        Name, email address, and other information you provide when creating an account or using our services.
                                    </p>
                                </div>
                                <div className="p-4 bg-muted/30 rounded-lg border-l-4 border-primary">
                                    <h4 className="font-semibold mb-3 flex items-center gap-2 text-sm sm:text-base">
                                        <FileText className="w-4 h-4" />
                                        Usage Data
                                    </h4>
                                    <p className="text-muted-foreground text-sm sm:text-base">
                                        Quiz performance, progress tracking, time spent on questions, and other application usage statistics.
                                    </p>
                                </div>
                                <div className="p-4 bg-muted/30 rounded-lg border-l-4 border-primary">
                                    <h4 className="font-semibold mb-3 flex items-center gap-2 text-sm sm:text-base">
                                        <Database className="w-4 h-4" />
                                        Device Information
                                    </h4>
                                    <p className="text-muted-foreground text-sm sm:text-base">
                                        Device type, operating system, app version, and other technical information for app optimization.
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card
                        data-section="usage"
                        className="overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border-primary/20"
                    >
                        <CardHeader className="bg-gradient-to-r from-primary/10 to-primary/5 p-4 sm:p-6">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-primary/20 rounded-lg">
                                    <Users className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                                </div>
                                <CardTitle className="text-xl sm:text-2xl md:text-3xl">How We Use Your Information</CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent className="p-4 sm:p-6 lg:p-8">
                            <div className="grid gap-3 sm:gap-4">
                                {[
                                    { title: 'Service Provision', desc: 'To provide and maintain our quiz application services' },
                                    { title: 'Performance Analysis', desc: 'To analyze quiz performance and provide personalized feedback' },
                                    { title: 'App Improvement', desc: 'To enhance user experience and develop new features' },
                                    { title: 'Communication', desc: 'To send important updates and notifications about our services' },
                                    { title: 'Support', desc: 'To respond to your inquiries and provide customer support' },
                                    { title: 'Security', desc: 'To detect, prevent, and address technical issues and security breaches' }
                                ].map((item, index) => (
                                    <div
                                        key={index}
                                        className="flex items-start gap-3 p-4 rounded-lg bg-gradient-to-r from-muted/50 to-muted/20 hover:from-primary/10 hover:to-primary/5 transition-all duration-300"
                                    >
                                        <div className="p-1.5 bg-primary/20 rounded-full flex-shrink-0">
                                            <CheckCircle className="w-4 h-4 text-primary" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-sm sm:text-base">{item.title}</h4>
                                            <p className="text-muted-foreground text-xs sm:text-sm">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>

                    <Card
                        data-section="sharing"
                        className="overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border-primary/20"
                    >
                        <CardHeader className="bg-gradient-to-r from-primary/10 to-primary/5 p-4 sm:p-6">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-primary/20 rounded-lg">
                                    <Globe className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                                </div>
                                <CardTitle className="text-xl sm:text-2xl md:text-3xl">Information Sharing</CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent className="p-4 sm:p-6 lg:p-8">
                            <div className="space-y-4 sm:space-y-6">
                                <div className="p-4 sm:p-6 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">
                                    <h4 className="font-semibold text-red-800 dark:text-red-300 mb-3 flex items-center gap-2 text-sm sm:text-base">
                                        <Shield className="w-5 h-5" />
                                        We Do Not Sell Your Data
                                    </h4>
                                    <p className="text-red-700 dark:text-red-400 text-sm sm:text-base">
                                        We never sell, rent, or trade your personal information to third parties for marketing purposes.
                                    </p>
                                </div>
                                <p className="text-muted-foreground text-sm sm:text-base">
                                    We may share your information only in the following limited circumstances:
                                </p>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                                        <span className="text-muted-foreground text-sm sm:text-base">With your explicit consent</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                                        <span className="text-muted-foreground text-sm sm:text-base">To comply with legal obligations</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                                        <span className="text-muted-foreground text-sm sm:text-base">With trusted service providers who assist in app functionality</span>
                                    </li>
                                </ul>
                            </div>
                        </CardContent>
                    </Card>

                    <Card
                        data-section="security"
                        className="overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border-primary/20"
                    >
                        <CardHeader className="bg-gradient-to-r from-primary/10 to-primary/5 p-4 sm:p-6">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-primary/20 rounded-lg">
                                    <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                                </div>
                                <CardTitle className="text-xl sm:text-2xl md:text-3xl">Data Security</CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent className="p-4 sm:p-6 lg:p-8">
                            <div className="grid lg:grid-cols-2 gap-4 sm:gap-6">
                                <div className="space-y-4">
                                    <h4 className="font-semibold text-sm sm:text-base">Security Measures:</h4>
                                    <div className="space-y-3">
                                        {[
                                            'End-to-end encryption',
                                            'Secure data transmission',
                                            'Regular security audits',
                                            'Access controls and monitoring'
                                        ].map((measure, index) => (
                                            <div key={index} className="flex items-center gap-3">
                                                <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                                                <span className="text-muted-foreground text-sm sm:text-base">{measure}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="p-4 sm:p-6 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg">
                                    <Lock className="w-6 h-6 sm:w-8 sm:h-8 text-primary mb-3" />
                                    <h4 className="font-semibold mb-3 text-sm sm:text-base">Offline Security</h4>
                                    <p className="text-xs sm:text-sm text-muted-foreground">
                                        Since CrackIT-X works offline, your quiz data is stored securely on your device with encryption.
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card
                        data-section="rights"
                        className="overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border-primary/20"
                    >
                        <CardHeader className="bg-gradient-to-r from-primary/10 to-primary/5 p-4 sm:p-6">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-primary/20 rounded-lg">
                                    <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                                </div>
                                <CardTitle className="text-xl sm:text-2xl md:text-3xl">Your Rights</CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent className="p-4 sm:p-6 lg:p-8">
                            <div className="grid gap-3 sm:gap-4">
                                {[
                                    { title: 'Access', desc: 'Request a copy of your personal data', icon: Eye },
                                    { title: 'Correction', desc: 'Update or correct your information', icon: FileText },
                                    { title: 'Deletion', desc: 'Request deletion of your personal data', icon: Database },
                                    { title: 'Portability', desc: 'Transfer your data to another service', icon: Globe },
                                    { title: 'Withdrawal', desc: 'Withdraw consent for data processing', icon: Shield }
                                ].map((right, index) => {
                                    const Icon = right.icon;
                                    return (
                                        <div
                                            key={index}
                                            className="p-4 border border-muted rounded-lg hover:border-primary/50 hover:bg-muted/30 transition-all duration-300"
                                        >
                                            <div className="flex items-start gap-3">
                                                <Icon className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                                                <div>
                                                    <h4 className="font-semibold text-sm sm:text-base">{right.title}</h4>
                                                    <p className="text-muted-foreground text-xs sm:text-sm">{right.desc}</p>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </CardContent>
                    </Card>

                    <Card
                        data-section="contact"
                        className="overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border-primary/20"
                    >
                        <CardHeader className="bg-gradient-to-r from-primary/10 to-primary/5 p-4 sm:p-6">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-primary/20 rounded-lg">
                                    <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                                </div>
                                <CardTitle className="text-xl sm:text-2xl md:text-3xl">Contact Us</CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent className="p-4 sm:p-6 lg:p-8">
                            <div className="text-center">
                                <p className="text-muted-foreground mb-4 sm:mb-6 text-sm sm:text-base">
                                    If you have any questions about this Privacy Policy or our data practices, please contact us:
                                </p>
                                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                                    <div className="p-4 sm:p-6 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg">
                                        <Mail className="w-6 h-6 sm:w-8 sm:h-8 text-primary mx-auto mb-3" />
                                        <h4 className="font-semibold mb-3 text-sm sm:text-base">Email</h4>
                                        <p className="text-xs sm:text-sm text-muted-foreground">contentive8@gmail.com</p>
                                    </div>
                                    <div className="p-4 sm:p-6 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg">
                                        <Globe className="w-6 h-6 sm:w-8 sm:h-8 text-primary mx-auto mb-3" />
                                        <h4 className="font-semibold mb-3 text-sm sm:text-base">Website</h4>
                                        <p className="text-xs sm:text-sm text-muted-foreground">contentive.in/privacy</p>
                                    </div>
                                </div>
                                <div className="mt-6 sm:mt-8 p-3 sm:p-4 bg-muted/30 rounded-lg">
                                    <p className="text-xs sm:text-sm text-muted-foreground">
                                        We will respond to your privacy-related inquiries within 30 days.
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>

            <style>{`
                @keyframes slideInLeft {
                  from {
                    opacity: 0;
                    transform: translateX(-20px);
                  }
                  to {
                    opacity: 1;
                    transform: translateX(0);
                  }
                }
                
                .prose {
                  color: inherit;
                }
                
                .prose p {
                  margin-bottom: 1rem;
                }

                .line-clamp-2 {
                  display: -webkit-box;
                  -webkit-line-clamp: 2;
                  -webkit-box-orient: vertical;
                  overflow: hidden;
                }
            `}</style>
        </div>
    );
};

export default PrivacyPolicy;