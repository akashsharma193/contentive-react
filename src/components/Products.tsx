import { useState, useRef, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Shield, Globe, Download, Play, Pause, FileText } from "lucide-react";

const Products = ({ onPrivacyClick }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const videoRef = useRef(null);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
    setShowControls(true);
  };

  useEffect(() => {
    let timer;
    if (isPlaying) {
      timer = setTimeout(() => {
        setShowControls(false);
      }, 1000);
    } else {
      setShowControls(true);
    }
    return () => clearTimeout(timer);
  }, [isPlaying]);

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-gradient">Product</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Introducing CrackIT-X - The ultimate offline quiz application for seamless exam experiences without internet dependency
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <Card className="tech-card">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Shield className="w-8 h-8 text-primary" />
                  </div>
                  <Badge variant="secondary">Quiz Platform</Badge>
                </div>
                <CardTitle className="text-3xl">CrackIT-X</CardTitle>
                <CardDescription className="text-lg">
                  Innovative offline quiz application that enables students to take exams without internet connectivity,
                  providing a seamless and distraction-free examination experience.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <h4 className="font-semibold text-lg">Key Features:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <Badge variant="outline" className="text-sm justify-center">
                      📱 Offline Quiz Taking
                    </Badge>
                    <Badge variant="outline" className="text-sm justify-center">
                      🚀 Fast Performance
                    </Badge>
                    <Badge variant="outline" className="text-sm justify-center">
                      📊 Instant Results
                    </Badge>
                    <Badge variant="outline" className="text-sm justify-center">
                      🎯 Multiple Question Types
                    </Badge>
                    <Badge variant="outline" className="text-sm justify-center">
                      💾 Local Data Storage
                    </Badge>
                    <Badge variant="outline" className="text-sm justify-center">
                      🔄 Progress Tracking
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="flex items-center gap-2"
                onClick={() => window.open('https://play.google.com/store/apps/details?id=com.contentive.crackitx&hl=en_IN', '_blank')}
              >
                <Download className="w-5 h-5" />
                Download App
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="flex items-center gap-2"
                onClick={() => window.open('https://lightskyblue-hummingbird-752521.hostingersite.com/', '_blank')}
              >
                <Globe className="w-5 h-5" />
                Visit Website
              </Button>
              <Button
                variant="secondary"
                size="lg"
                className="flex items-center gap-2"
                onClick={onPrivacyClick}
              >
                <FileText className="w-5 h-5" />
                Privacy Policy
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            <Card className="overflow-hidden">
              <div className="relative aspect-video bg-muted/50">
                <video
                  ref={videoRef}
                  className="absolute inset-0 w-full h-full object-contain rounded-lg"
                  onEnded={handleVideoEnd}
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                >
                  <source src="/crackit-demo.mp4" type="video/mp4" />
                  <source src="/crackit-demo.webm" type="video/webm" />
                  Your browser does not support the video tag.
                </video>

                {showControls && (
                  <div
                    className="absolute inset-0 flex items-center justify-center cursor-pointer bg-black/20 hover:bg-black/30 transition-colors"
                    onClick={handlePlayPause}
                  >
                    <div className="text-center space-y-4">
                      <div className="p-4 bg-primary/90 hover:bg-primary rounded-full w-fit mx-auto transition-colors">
                        {isPlaying ? (
                          <Pause className="w-12 h-12 text-white" />
                        ) : (
                          <Play className="w-12 h-12 text-white ml-1" />
                        )}
                      </div>
                      {!isPlaying && (
                        <div>
                          <h3 className="text-xl font-semibold mb-2 text-white">Watch Demo</h3>
                          <p className="text-white/90">
                            See CrackIT-X in action and discover how it makes offline quizzes effortless
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {!showControls && isPlaying && (
                  <div
                    className="absolute inset-0 cursor-pointer"
                    onClick={() => setShowControls(true)}
                  />
                )}

                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 rounded-lg pointer-events-none"></div>
              </div>
            </Card>
            <p className="text-sm text-muted-foreground text-center">
              Experience seamless offline quiz taking with CrackIT-X
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;