//flutter run -t lib/main.dart

import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:term_summary/components.dart';
import 'package:visibility_detector/visibility_detector.dart';
import 'project_pages/project1_page.dart';
import 'project_pages/project2_page.dart';
import 'project_pages/project3_page.dart';
import 'project_pages/project4_page.dart';
import 'project_pages/project5_page.dart';
import 'project_pages/project6_page.dart';
import 'project_pages/project7_page.dart';
import 'project_pages/project8_page.dart';
import 'project_pages/project9_page.dart';
import 'project_pages/project10_page.dart';
import 'project_pages/project11_page.dart';
import 'project_pages/project12_page.dart';
import 'package:flutter_svg/flutter_svg.dart';
// ignore: avoid_web_libraries_in_flutter
import 'dart:html' as html;

void main() => runApp(const MyApp());

class MyApp extends StatelessWidget {
  const MyApp({super.key});
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Portfolio',
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        useMaterial3: false,
        scaffoldBackgroundColor: Colors.white,
        fontFamily: 'glacial-indifference',
        textTheme: TextTheme(
          bodyLarge: TextStyle(fontFamily: 'glacial-indifference'),
          bodyMedium: TextStyle(fontFamily: 'glacial-indifference'),
          displayLarge: TextStyle(fontFamily: 'glacial-indifference'),
        ).apply(
          bodyColor: Colors.black,
          displayColor: Colors.black,
        ),
      ),
      home: const LandingPage(),
    );
  }
}

class LandingPage extends StatefulWidget {
  const LandingPage({super.key});

  @override
  State<LandingPage> createState() => _LandingPageState();
}

class _LandingPageState extends State<LandingPage> {
  final _scrollController = ScrollController();

  final _aboutKey = GlobalKey();
  final _projKey = GlobalKey();
  final _expKey = GlobalKey();

  bool _logoVisible = true;
  bool _aboutVisible = false;
  bool _footerVisible = false;

  final List<Project> projects = [
    Project(
      title: 'RAIA: Rapid Adaptive Intelligent Agent',
      subtitle: 'Autonomous Charging EV Designed for Singapore in 2040',
      thumbnailPath: 'assets/images/project1.png',
      detailPage: const Project1Page(),
      categories: ['Product', 'Graphic', 'Software'],
    ),
    Project(
      title: 'Generative AI Engineered Bus Seat',
      subtitle: 'Optimizing Bus Seat Design for Comfort, Cost, and Sustainability',
      thumbnailPath: 'assets/images/project2.png',
      detailPage: Project2Page(),
      categories: ['Software'],
    ),
    Project(
      title: 'AI Data Analytics for Design Opportunities',
      subtitle: 'UX Analysis for Gaming Chair Design',
      thumbnailPath: 'assets/images/project3.png',
      detailPage: Project3Page(),
      categories: ['Software'],
    ),
    Project(
      title: 'YouTwitFace Algorithmic System Design',
      subtitle: 'Data Structures and Points System Design',
      thumbnailPath: 'assets/images/project4.png',
      detailPage: Project4Page(),
      categories: ['Software'],
    ),
    Project(
      title: 'FCSUTD Graphic Designs',
      subtitle: 'Branding and Visual Identity for Sports Club',
      thumbnailPath: 'assets/images/project5.png',
      detailPage: Project5Page(),
      categories: ['Graphic'],
    ),
    Project(
      title: 'Eastern Thunder FC Instagram Posts',
      subtitle: 'Social Media Content and Brand Consistency',
      thumbnailPath: 'assets/images/project6.png',
      detailPage: Project6Page(),
      categories: ['Graphic'],
    ),
    Project(
      title: 'Oriental Enlightenment: Smart Lighting System',
      subtitle: 'subtitle',
      thumbnailPath: 'assets/images/project7.png',
      detailPage: Project7Page(),
      categories: ['Product', 'Graphic'],
    ),
    Project(
      title: 'Personal Art Account: @eyevpham',
      subtitle: 'Digital Art, Illustration & Personal Expression',
      thumbnailPath: 'assets/images/project8.png',
      detailPage: Project8Page(),
      categories: ['Illustration'],
    ),
    Project(
      title: 'Portraits of Youth Activists',
      subtitle: 'Illustration Series & Social Commentary',
      thumbnailPath: 'assets/images/project9.png',
      detailPage: Project9Page(),
      categories: ['Illustration'],
    ),
    Project(
      title: '40th Anniversary of Shin Zhong Taijiquan Association',
      subtitle: '''Logo design for Tai Chi Assosciation's Anniversary''',
      thumbnailPath: 'assets/images/project10.png',
      detailPage: Project10Page(),
      categories: ['Illustration'],
    ),
    Project(
      title: 'Research Illustration: Ballistic Electrons',
      subtitle: '''Creative Communication of Ballistic Electrons in Graphene''',
      thumbnailPath: 'assets/images/project11.png',
      detailPage: Project11Page(),
      categories: ['Illustration'],
    ),
    Project(
      title: 'IB Art Exhibition: Interpreting Childhood',
      subtitle: '''An Artistic Exploration of Growing Up: Childhood Memories, Identity, and Vietnamese Heritage''',
      thumbnailPath: 'assets/images/ex2.png',
      detailPage: Project12Page(),
      categories: ['Illustration'],
    ),
  ];

  @override
  void initState() {
    super.initState();
    _scrollController.addListener(_onScroll);
  }

  void _onScroll() {
    final triggerOffset = MediaQuery.of(context).size.height * 0.5;
    if (_scrollController.offset > triggerOffset && _logoVisible) {
      setState(() => _logoVisible = false);
    } else if (_scrollController.offset <= triggerOffset && !_logoVisible) {
      setState(() => _logoVisible = true);
    }
  }

  void _scrollTo(GlobalKey key) {
    Scrollable.ensureVisible(
      key.currentContext!,
      duration: const Duration(milliseconds: 500),
      curve: Curves.easeInOut,
    );
  }

  @override
  Widget build(BuildContext context) {
    final isPortrait = MediaQuery.of(context).size.height > MediaQuery.of(context).size.width;
    final screenWidth = MediaQuery.of(context).size.width;
    final crossAxisCount = screenWidth < 800 ? 1 : 2;

    return Scaffold(
      extendBodyBehindAppBar: true,
      appBar: AppBar(
        backgroundColor: Colors.white,
        elevation: 0,
        surfaceTintColor: Colors.transparent,
        foregroundColor: Colors.black,
        title: Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [
            MouseRegion(
              cursor: SystemMouseCursors.click,
              child: GestureDetector(
                onTap: () {
                  _scrollController.animateTo(
                    0,
                    duration: const Duration(milliseconds: 500),
                    curve: Curves.easeInOut,
                  );
                },
                child: SvgPicture.asset(
                  'assets/images/logo.svg',
                  height: 50,
                  fit: BoxFit.contain,
                ),
              ),
            ),
            Row(
              children: [
                NavButton('about', () => _scrollTo(_aboutKey)),
                const SizedBox(width: 24),
                NavButton('projects', () => _scrollTo(_projKey)),
                const SizedBox(width: 24),
                NavButton('experience', () => _scrollTo(_expKey)),
              ],
            ),
          ],
        ),
      ),
      body: Stack(
        children: [
          SingleChildScrollView(
            controller: _scrollController,
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.stretch,
              children: [
                AnimatedOpacity(
                  duration: const Duration(milliseconds: 500),
                  opacity: _logoVisible ? 1.0 : 0.0,
                  child: SizedBox(
                    height: MediaQuery.of(context).size.height,
                    child: Center(
                      child: Image.asset(
                        'assets/images/full_logo.png',
                        fit: BoxFit.contain,
                        width: 800,
                      ),
                    ),
                  ),
                ),
                Container(
                  key: _aboutKey,
                  padding: const EdgeInsets.all(48),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      const ImageHeader(imagePath: 'assets/images/aboutmeheader.png'),
                      const SizedBox(height: 20),
                      VisibilityDetector(
                        key: const Key('about-visible'),
                        onVisibilityChanged: (info) {
                          if (info.visibleFraction > 0.2 && !_aboutVisible) {
                            setState(() => _aboutVisible = true);
                          }
                        },
                        child: AnimatedOpacity(
                          duration: const Duration(milliseconds: 800),
                          curve: Curves.easeOut,
                          opacity: _aboutVisible ? 1 : 0,
                          child: AnimatedSlide(
                            duration: const Duration(milliseconds: 800),
                            curve: Curves.easeOut,
                            offset: _aboutVisible ? Offset.zero : const Offset(0, 0.3),
                            child: Row(
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children: [
                                ClipRRect(
                                  borderRadius: BorderRadius.circular(20),
                                  child: Image.asset(
                                    'assets/images/camera.png',
                                    width: 600,
                                    height: 500,
                                    fit: BoxFit.cover,
                                  ),
                                ),
                                const SizedBox(width: 50),
                                const Expanded(
                                  child: Text(
                                    '''Xin chào! 

I'm Ivy! I'm originally from Vietnam, but I've lived overseas my whole life.

I’m an aspiring designer fueled by iced matcha lattes and a strong belief that good design can change the world (or at least make it a little smarter). 

I’m currently studying Design and Artificial Intelligence at the Singapore University of Technology and Design, with minors in Design, Technology and Society and Computer Science.

Always curious and chasing new things to learn, I have explored designing an autonomous car from scratch, developed an AI that help people design more intuitively, and geeked out over the latest technologies. 

When I’m not sketching ideas or drowning in assignments, you can catch me sprinting across a football pitch, diving for a volleyball (gracefully), or hunting down photo spots with my friends.''',
                                    style: TextStyle(fontSize: 16, height: 1.5),
                                  ),
                                ),
                              ],
                            ),
                          ),
                        ),
                      ),
                    ],
                  ),
                ),
                Container(
                  key: _projKey,
                  padding: const EdgeInsets.all(48),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      const ImageHeader(imagePath: 'assets/images/projectsheader.png'),
                      const SizedBox(height: 20),
                      ProjectGridSection(allProjects: projects)
                    ],
                  ),
                ),
                Container(
                  key: _expKey,
                  padding: const EdgeInsets.all(48),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      const ImageHeader(imagePath: 'assets/images/experienceheader.png'),
                      const SizedBox(height: 24),
                      Row(
                        mainAxisAlignment: MainAxisAlignment.center,
                        children: [
                          Text(
                            'Resume:',
                            style: Theme.of(context).textTheme.titleLarge,
                          ),
                          const SizedBox(width: 16),
                          ElevatedButton.icon(
                            onPressed: () {
                              html.window.open(
                                'https://drive.google.com/file/d/1YLuMOi6czodjl71BTS0rpPQvdWs5BHb5/preview',
                                '_blank',
                              );
                            },
                            style: ElevatedButton.styleFrom(
                              backgroundColor: const Color(0xFF144A91),
                              foregroundColor: Colors.white,
                              padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 12),
                              shape: RoundedRectangleBorder(
                                borderRadius: BorderRadius.circular(12),
                              ),
                            ),
                            icon: const Icon(Icons.picture_as_pdf),
                            label: const Text('View Resume'),
                          ),
                        ],
                      ),
                      const SizedBox(height: 24),
                      Center(
                        child: Image.asset(
                          'assets/images/resume.png',
                          width: 800,
                          fit: BoxFit.contain,
                        ),
                      ),
                    ],
                  ),
                ),
                VisibilityDetector(
                  key: const Key('footer'),
                  onVisibilityChanged: (info) {
                    if (info.visibleFraction > 0.2 && !_footerVisible) {
                      setState(() => _footerVisible = true);
                    }
                  },
                  child: AnimatedOpacity(
                    duration: const Duration(milliseconds: 800),
                    opacity: _footerVisible ? 1 : 0,
                    child: AnimatedSlide(
                      duration: const Duration(milliseconds: 800),
                      offset: _footerVisible ? Offset.zero : const Offset(0, 0.3),
                      curve: Curves.easeOutBack,
                      child: Column(
                        children: [
                          Padding(
                            padding: const EdgeInsets.symmetric(vertical: 24),
                            child: Center(
                              child: Image.asset(
                                'assets/images/logo.png',
                                width: 180,
                                fit: BoxFit.contain,
                              ),
                            ),
                          ),
                          Padding(
                            padding: const EdgeInsets.symmetric(vertical: 24),
                            child: Column(
                              mainAxisSize: MainAxisSize.min,
                              children: [
                                Row(
                                  mainAxisAlignment: MainAxisAlignment.center,
                                  children: const [
                                    SocialItem(
                                      icon: FontAwesomeIcons.instagram,
                                      label: 'Instagram',
                                      url: 'https://www.instagram.com/ivphm/',
                                    ),
                                    SizedBox(width: 16),
                                    SocialItem(
                                      icon: FontAwesomeIcons.github,
                                      label: 'GitHub',
                                      url: 'https://github.com/ivphm',
                                    ),
                                    SizedBox(width: 16),
                                    SocialItem(
                                      icon: FontAwesomeIcons.linkedin,
                                      label: 'LinkedIn',
                                      url: 'https://www.linkedin.com/in/ivyphamtcg/',
                                    ),
                                    SizedBox(width: 16),
                                    SocialItem(
                                      icon: FontAwesomeIcons.google,
                                      label: 'Gmail',
                                      url: 'mailto:ivyphamtcg@gmail.com',
                                    ),
                                  ],
                                ),
                                const SizedBox(height: 16),
                              ],
                            ),
                          ),
                        ],
                      ),
                    ),
                  ),
                ),
              ],
            ),
          ),
          if (isPortrait)
            Positioned.fill(
              child: Container(
                color: Colors.white.withOpacity(0.9),
                child: SafeArea(
                  child: Column(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: const [
                      Icon(Icons.screen_rotation, size: 64, color: Colors.black26),
                      SizedBox(height: 24),
                      Text(
                        'Please rotate your device\ninto landscape mode',
                        textAlign: TextAlign.center,
                        style: TextStyle(
                          color: Colors.black54,
                          fontSize: 24,
                          fontWeight: FontWeight.w300,
                          height: 1.3,
                        ),
                      ),
                    ],
                  ),
                ),
              ),
            ),
        ],
      ),
    );
  }
}

class _NavItem extends StatefulWidget {
  final String label;
  final VoidCallback onTap;
  const _NavItem({required this.label, required this.onTap});

  @override
  State<_NavItem> createState() => _NavItemState();
}

class _NavItemState extends State<_NavItem> {
  bool _isHovered = false;

  @override
  Widget build(BuildContext context) {
    return MouseRegion(
      onEnter: (_) => setState(() => _isHovered = true),
      onExit: (_) => setState(() => _isHovered = false),
      child: GestureDetector(
        onTap: widget.onTap,
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            Text(
              widget.label,
              style: const TextStyle(fontSize: 14),
            ),
            AnimatedContainer(
              duration: const Duration(milliseconds: 200),
              height: 2,
              width: _isHovered ? 24 : 0,
              color: const Color(0xFF144A91),
            ),
          ],
        ),
      ),
    );
  }
}