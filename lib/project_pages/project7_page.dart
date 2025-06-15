import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import '../web_specific.dart' if (dart.library.io) '../stub.dart';

class Project7Page extends StatelessWidget {
  const Project7Page({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xFFF9F9F9),
      appBar: AppBar(
        title: const Text('Oriental Enlightenment: Smart Lighting System'),
        backgroundColor: Colors.white,
        foregroundColor: Colors.black,
        elevation: 0,
        surfaceTintColor: Colors.transparent,
      ),
      body: SingleChildScrollView(
        padding: const EdgeInsets.symmetric(vertical: 24),
        child: Center(
          child: ConstrainedBox(
            constraints: const BoxConstraints(maxWidth: 900),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                const Text(
                  'Oriental Enlightenment: Smart Lighting System',
                  style: TextStyle(fontSize: 28, fontWeight: FontWeight.bold),
                ),
                const SizedBox(height: 4),
                const Text(
                  'Design, IoT, and Context-Aware Smart Systems',
                  style: TextStyle(fontSize: 18, fontWeight: FontWeight.w300),
                ),
                const SizedBox(height: 32),

                // Info Row
                Row(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: const [
                    Expanded(
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Text('Course', style: TextStyle(fontWeight: FontWeight.bold)),
                          SizedBox(height: 4),
                          Text('''SUTD: 03.007 Design Thinking 
and Innovation'''),
                        ],
                      ),
                    ),
                    Expanded(
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Text('Strategies:', style: TextStyle(fontWeight: FontWeight.bold)),
                          SizedBox(height: 4),
                          Text('''IoT, Context Awareness, 
UX Design, Prototyping'''),
                        ],
                      ),
                    ),
                    Expanded(
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Text('Timeline:', style: TextStyle(fontWeight: FontWeight.bold)),
                          SizedBox(height: 4),
                          Text('Jan 2023 – Apr 2023'),
                        ],
                      ),
                    ),
                    Expanded(
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Text('Tools Used:', style: TextStyle(fontWeight: FontWeight.bold)),
                          SizedBox(height: 4),
                          Text('Arduino, Fusion 360, SketchUp, TwinMotion, Canva'),
                        ],
                      ),
                    ),
                  ],
                ),

                const SizedBox(height: 32),

                const Text(
                  'This project reimagines traditional lighting through the lens of cultural storytelling and smart sensing. Our team developed a context-aware lighting prototype that adapts to motion, ambient brightness, and proximity—wrapped in a symbolic lantern design rooted in oriental aesthetics. The system includes smart sensors, Arduino-based logic, and a focus on ambient user experience, crafted to evoke emotion and mindfulness in daily routines.',
                  style: TextStyle(fontSize: 16, height: 1.6),
                ),

                const SizedBox(height: 40),
                const Text('Project Demo Video:', style: TextStyle(fontSize: 20)),
                const SizedBox(height: 16),
                const YoutubeEmbed(videoUrl: 'https://www.youtube.com/embed/S5VPaoTUohI'),

                const SizedBox(height: 40),
                const Text('Supporting Documents:', style: TextStyle(fontSize: 20)),
                const SizedBox(height: 16),

                // Images for posters
                Image.asset('assets/images/orientalposter.png'),
                const SizedBox(height: 24),

                // Heyzine Flipbooks
                const FlipbookEmbed(url: 'https://heyzine.com/flip-book/d05c4fc6e9.html'),
                const SizedBox(height: 24),
                const FlipbookEmbed(url: 'https://heyzine.com/flip-book/768f29dd10.html'),

                const SizedBox(height: 40),

                // Two images side by side
                Row(
                  children: [
                    Expanded(
                      child: Padding(
                        padding: const EdgeInsets.only(right: 8),
                        child: ClipRRect(
                          borderRadius: BorderRadius.circular(12),
                          child: Image.asset('assets/images/oriental1.png'),
                        ),
                      ),
                    ),
                    Expanded(
                      child: Padding(
                        padding: const EdgeInsets.only(left: 8),
                        child: ClipRRect(
                          borderRadius: BorderRadius.circular(12),
                          child: Image.asset('assets/images/oriental2.png'),
                        ),
                      ),
                    ),
                  ],
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}

// Embeds a YouTube video
class YoutubeEmbed extends StatelessWidget {
  final String videoUrl;
  const YoutubeEmbed({super.key, required this.videoUrl});

  @override
  Widget build(BuildContext context) {
    if (kIsWeb) {
      registerFlipbookViewFactory('youtube-video', videoUrl);
      return const SizedBox(
        height: 500,
        child: HtmlElementView(viewType: 'youtube-video'),
      );
    } else {
      return const Text('Video preview only available on web.');
    }
  }
}

// Embeds a Heyzine flipbook
class FlipbookEmbed extends StatelessWidget {
  final String url;
  const FlipbookEmbed({super.key, required this.url});

  @override
  Widget build(BuildContext context) {
    if (kIsWeb) {
      registerFlipbookViewFactory(url, url);
      return SizedBox(
        height: 600,
        child: HtmlElementView(viewType: url),
      );
    } else {
      return const Text('Flipbook preview only available on web.');
    }
  }
}