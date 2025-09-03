import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Eye, Lock, Database, Users, Mail, FileText, CheckCircle, Globe, Shield } from "lucide-react";

const PrivacyPolicy = ({ onBack }) => {
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
            <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 py-4 sm:py-6 md:py-8 lg:py-12">
                <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-6 sm:mb-8 md:mb-10 lg:mb-12">
                        <Button
                            variant="ghost"
                            size="sm"
                            className="hover:bg-primary/10 w-fit text-base sm:text-lg px-3 py-2 sm:px-4 sm:py-3"
                            onClick={onBack}
                        >
                            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                            Back
                        </Button>
                    </div>

                    <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16 xl:mb-20">
                        <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 bg-primary/10 rounded-full mb-4 sm:mb-6 md:mb-8 animate-bounce">
                            <Lock className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 text-primary" />
                        </div>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-3 sm:mb-4 md:mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                            Privacy Policy
                        </h1>
                        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-muted-foreground max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto px-4 leading-relaxed">
                            Your privacy is important to us. Learn how we collect, use, and protect your information.
                        </p>
                        <div className="mt-4 sm:mt-6 md:mt-8 text-base sm:text-lg md:text-xl text-muted-foreground">
                            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                        </div>
                    </div>
                </div>

                <div className="grid lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 xl:gap-10">
                    <div className="lg:col-span-3 space-y-6 sm:space-y-8 md:space-y-10">
                        <Card
                            data-section="overview"
                            className="overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border-primary/20"
                        >
                            <CardHeader className="bg-gradient-to-r from-primary/10 to-primary/5 p-4 sm:p-6 md:p-8">
                                <div className="flex items-center gap-3 sm:gap-4">
                                    <div className="p-2 sm:p-3 bg-primary/20 rounded-lg">
                                        <Eye className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-primary" />
                                    </div>
                                    <CardTitle className="text-2xl sm:text-3xl md:text-4xl">Overview</CardTitle>
                                </div>
                            </CardHeader>
                            <CardContent className="p-4 sm:p-6 md:p-8 lg:p-10">
                                <div className="prose prose-base sm:prose-lg md:prose-xl lg:prose-2xl max-w-none">
                                    <p className="text-muted-foreground leading-relaxed mb-6 sm:mb-8 text-base sm:text-lg md:text-xl">
                                        At CrackIT-X, we are committed to protecting your privacy and ensuring the security of your personal information.
                                        This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our
                                        offline quiz application and related services.
                                    </p>
                                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-6 sm:mt-8">
                                        <div className="p-4 sm:p-5 md:p-6 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                                            <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-green-600 mb-3" />
                                            <h4 className="font-semibold text-green-800 dark:text-green-300 text-base sm:text-lg md:text-xl">Data Protection</h4>
                                            <p className="text-sm sm:text-base md:text-lg text-green-600 dark:text-green-400">We implement industry-standard security measures</p>
                                        </div>
                                        <div className="p-4 sm:p-5 md:p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                                            <Shield className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-blue-600 mb-3" />
                                            <h4 className="font-semibold text-blue-800 dark:text-blue-300 text-base sm:text-lg md:text-xl">Transparency</h4>
                                            <p className="text-sm sm:text-base md:text-lg text-blue-600 dark:text-blue-400">Clear information about data collection and usage</p>
                                        </div>
                                        <div className="p-4 sm:p-5 md:p-6 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-800 sm:col-span-2 lg:col-span-1">
                                            <Users className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-purple-600 mb-3" />
                                            <h4 className="font-semibold text-purple-800 dark:text-purple-300 text-base sm:text-lg md:text-xl">User Control</h4>
                                            <p className="text-sm sm:text-base md:text-lg text-purple-600 dark:text-purple-400">You have control over your personal data</p>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card
                            data-section="information"
                            className="overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border-primary/20"
                        >
                            <CardHeader className="bg-gradient-to-r from-primary/10 to-primary/5 p-4 sm:p-6 md:p-8">
                                <div className="flex items-center gap-3 sm:gap-4">
                                    <div className="p-2 sm:p-3 bg-primary/20 rounded-lg">
                                        <Database className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-primary" />
                                    </div>
                                    <CardTitle className="text-2xl sm:text-3xl md:text-4xl">Information We Collect</CardTitle>
                                </div>
                            </CardHeader>
                            <CardContent className="p-4 sm:p-6 md:p-8 lg:p-10">
                                <div className="space-y-4 sm:space-y-6 md:space-y-8">
                                    <div className="p-4 sm:p-5 md:p-6 bg-muted/30 rounded-lg border-l-4 border-primary">
                                        <h4 className="font-semibold mb-3 flex items-center gap-2 text-base sm:text-lg md:text-xl">
                                            <Users className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                                            Personal Information
                                        </h4>
                                        <p className="text-muted-foreground text-base sm:text-lg md:text-xl">
                                            Name, email address, and other information you provide when creating an account or using our services.
                                        </p>
                                    </div>
                                    <div className="p-4 sm:p-5 md:p-6 bg-muted/30 rounded-lg border-l-4 border-primary">
                                        <h4 className="font-semibold mb-3 flex items-center gap-2 text-base sm:text-lg md:text-xl">
                                            <FileText className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                                            Usage Data
                                        </h4>
                                        <p className="text-muted-foreground text-base sm:text-lg md:text-xl">
                                            Quiz performance, progress tracking, time spent on questions, and other application usage statistics.
                                        </p>
                                    </div>
                                    <div className="p-4 sm:p-5 md:p-6 bg-muted/30 rounded-lg border-l-4 border-primary">
                                        <h4 className="font-semibold mb-3 flex items-center gap-2 text-base sm:text-lg md:text-xl">
                                            <Database className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                                            Device Information
                                        </h4>
                                        <p className="text-muted-foreground text-base sm:text-lg md:text-xl">
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
                            <CardHeader className="bg-gradient-to-r from-primary/10 to-primary/5 p-4 sm:p-6 md:p-8">
                                <div className="flex items-center gap-3 sm:gap-4">
                                    <div className="p-2 sm:p-3 bg-primary/20 rounded-lg">
                                        <Users className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-primary" />
                                    </div>
                                    <CardTitle className="text-2xl sm:text-3xl md:text-4xl">How We Use Your Information</CardTitle>
                                </div>
                            </CardHeader>
                            <CardContent className="p-4 sm:p-6 md:p-8 lg:p-10">
                                <div className="grid gap-4 sm:gap-5 md:gap-6">
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
                                            className="flex items-start gap-3 sm:gap-4 md:gap-5 p-4 sm:p-5 md:p-6 rounded-lg bg-gradient-to-r from-muted/50 to-muted/20 hover:from-primary/10 hover:to-primary/5 transition-all duration-300"
                                        >
                                            <div className="p-1.5 sm:p-2 md:p-2.5 bg-primary/20 rounded-full flex-shrink-0">
                                                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-primary" />
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-base sm:text-lg md:text-xl">{item.title}</h4>
                                                <p className="text-muted-foreground text-sm sm:text-base md:text-lg">{item.desc}</p>
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
                            <CardHeader className="bg-gradient-to-r from-primary/10 to-primary/5 p-4 sm:p-6 md:p-8">
                                <div className="flex items-center gap-3 sm:gap-4">
                                    <div className="p-2 sm:p-3 bg-primary/20 rounded-lg">
                                        <Globe className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-primary" />
                                    </div>
                                    <CardTitle className="text-2xl sm:text-3xl md:text-4xl">Information Sharing</CardTitle>
                                </div>
                            </CardHeader>
                            <CardContent className="p-4 sm:p-6 md:p-8 lg:p-10">
                                <div className="space-y-4 sm:space-y-6">
                                    <div className="p-4 sm:p-5 md:p-6 lg:p-8 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">
                                        <h4 className="font-semibold text-red-800 dark:text-red-300 mb-3 flex items-center gap-2 text-base sm:text-lg md:text-xl">
                                            <Shield className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
                                            We Do Not Sell Your Data
                                        </h4>
                                        <p className="text-red-700 dark:text-red-400 text-base sm:text-lg md:text-xl">
                                            We never sell, rent, or trade your personal information to third parties for marketing purposes.
                                        </p>
                                    </div>
                                    <p className="text-muted-foreground text-base sm:text-lg md:text-xl">
                                        We may share your information only in the following limited circumstances:
                                    </p>
                                    <ul className="space-y-3 sm:space-y-4 md:space-y-5">
                                        <li className="flex items-start gap-3 sm:gap-4">
                                            <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-green-600 mt-0.5 flex-shrink-0" />
                                            <span className="text-muted-foreground text-base sm:text-lg md:text-xl">With your explicit consent</span>
                                        </li>
                                        <li className="flex items-start gap-3 sm:gap-4">
                                            <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-green-600 mt-0.5 flex-shrink-0" />
                                            <span className="text-muted-foreground text-base sm:text-lg md:text-xl">To comply with legal obligations</span>
                                        </li>
                                        <li className="flex items-start gap-3 sm:gap-4">
                                            <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-green-600 mt-0.5 flex-shrink-0" />
                                            <span className="text-muted-foreground text-base sm:text-lg md:text-xl">With trusted service providers who assist in app functionality</span>
                                        </li>
                                    </ul>
                                </div>
                            </CardContent>
                        </Card>

                        <Card
                            data-section="security"
                            className="overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border-primary/20"
                        >
                            <CardHeader className="bg-gradient-to-r from-primary/10 to-primary/5 p-4 sm:p-6 md:p-8">
                                <div className="flex items-center gap-3 sm:gap-4">
                                    <div className="p-2 sm:p-3 bg-primary/20 rounded-lg">
                                        <Shield className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-primary" />
                                    </div>
                                    <CardTitle className="text-2xl sm:text-3xl md:text-4xl">Data Security</CardTitle>
                                </div>
                            </CardHeader>
                            <CardContent className="p-4 sm:p-6 md:p-8 lg:p-10">
                                <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
                                    <div className="space-y-4 sm:space-y-6">
                                        <h4 className="font-semibold text-base sm:text-lg md:text-xl">Security Measures:</h4>
                                        <div className="space-y-3 sm:space-y-4 md:space-y-5">
                                            {[
                                                'End-to-end encryption',
                                                'Secure data transmission',
                                                'Regular security audits',
                                                'Access controls and monitoring'
                                            ].map((measure, index) => (
                                                <div key={index} className="flex items-center gap-3 sm:gap-4">
                                                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-primary rounded-full flex-shrink-0"></div>
                                                    <span className="text-muted-foreground text-base sm:text-lg md:text-xl">{measure}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="p-4 sm:p-5 md:p-6 lg:p-8 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg">
                                        <Lock className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-primary mb-3 sm:mb-4" />
                                        <h4 className="font-semibold mb-3 text-base sm:text-lg md:text-xl">Offline Security</h4>
                                        <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
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
                            <CardHeader className="bg-gradient-to-r from-primary/10 to-primary/5 p-4 sm:p-6 md:p-8">
                                <div className="flex items-center gap-3 sm:gap-4">
                                    <div className="p-2 sm:p-3 bg-primary/20 rounded-lg">
                                        <CheckCircle className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-primary" />
                                    </div>
                                    <CardTitle className="text-2xl sm:text-3xl md:text-4xl">Your Rights</CardTitle>
                                </div>
                            </CardHeader>
                            <CardContent className="p-4 sm:p-6 md:p-8 lg:p-10">
                                <div className="grid gap-4 sm:gap-5 md:gap-6">
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
                                                className="p-4 sm:p-5 md:p-6 border border-muted rounded-lg hover:border-primary/50 hover:bg-muted/30 transition-all duration-300"
                                            >
                                                <div className="flex items-start gap-3 sm:gap-4">
                                                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-primary mt-1 flex-shrink-0" />
                                                    <div>
                                                        <h4 className="font-semibold text-base sm:text-lg md:text-xl">{right.title}</h4>
                                                        <p className="text-muted-foreground text-sm sm:text-base md:text-lg">{right.desc}</p>
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
                            <CardHeader className="bg-gradient-to-r from-primary/10 to-primary/5 p-4 sm:p-6 md:p-8">
                                <div className="flex items-center gap-3 sm:gap-4">
                                    <div className="p-2 sm:p-3 bg-primary/20 rounded-lg">
                                        <Mail className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-primary" />
                                    </div>
                                    <CardTitle className="text-2xl sm:text-3xl md:text-4xl">Contact Us</CardTitle>
                                </div>
                            </CardHeader>
                            <CardContent className="p-4 sm:p-6 md:p-8 lg:p-10">
                                <div className="text-center">
                                    <p className="text-muted-foreground mb-4 sm:mb-6 md:mb-8 text-base sm:text-lg md:text-xl">
                                        If you have any questions about this Privacy Policy or our data practices, please contact us:
                                    </p>
                                    <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
                                        <div className="p-4 sm:p-5 md:p-6 lg:p-8 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg">
                                            <Mail className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-primary mx-auto mb-3 sm:mb-4" />
                                            <h4 className="font-semibold mb-3 text-base sm:text-lg md:text-xl">Email</h4>
                                            <p className="text-sm sm:text-base md:text-lg text-muted-foreground">contentive8@gmail.com</p>
                                        </div>
                                        <div className="p-4 sm:p-5 md:p-6 lg:p-8 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg">
                                            <Globe className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-primary mx-auto mb-3 sm:mb-4" />
                                            <h4 className="font-semibold mb-3 text-base sm:text-lg md:text-xl">Website</h4>
                                            <p className="text-sm sm:text-base md:text-lg text-muted-foreground">contentive.in/privacy</p>
                                        </div>
                                    </div>
                                    <div className="mt-6 sm:mt-8 md:mt-10 p-3 sm:p-4 md:p-5 bg-muted/30 rounded-lg">
                                        <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
                                            We will respond to your privacy-related inquiries within 30 days.
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>

            <style jsx>{`
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