import 'package:flutter/material.dart';
import 'dart:html' as html;

class Project8Page extends StatefulWidget {
  const Project8Page({super.key});

  @override
  State<Project8Page> createState() => _Project8PageState();
}

class _Project8PageState extends State<Project8Page> {
  bool _isHovering = false;

  void _openInstagram() {
    const instagramUrl = 'https://www.instagram.com/eyevpham/';
    html.window.open(instagramUrl, '_blank');
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xFFF9F9F9),
      appBar: AppBar(
        title: const Text('Personal Art Account: @eyevpham'),
        backgroundColor: Colors.white,
        foregroundColor: Colors.black,
        elevation: 0,
        surfaceTintColor: Colors.transparent,
      ),
      body: Center(
        child: MouseRegion(
          onEnter: (_) => setState(() => _isHovering = true),
          onExit: (_) => setState(() => _isHovering = false),
          cursor: SystemMouseCursors.click,
          child: GestureDetector(
            onTap: _openInstagram,
            child: AnimatedContainer(
              duration: const Duration(milliseconds: 300),
              curve: Curves.easeInOutCubic,
              transform: _isHovering
                  ? (Matrix4.identity()..scale(1.04))
                  : Matrix4.identity(),
              decoration: BoxDecoration(
                borderRadius: BorderRadius.circular(20),
                boxShadow: _isHovering
                    ? [
                        BoxShadow(
                          color: const Color.fromARGB(255, 78, 78, 80).withOpacity(0.3),
                          blurRadius: 20,
                          spreadRadius: 2,
                          offset: const Offset(0, 6),
                        )
                      ]
                    : [],
              ),
              child: Stack(
                alignment: Alignment.center,
                children: [
                  ClipRRect(
                    borderRadius: BorderRadius.circular(20),
                    child: Image.asset(
                      'assets/images/eyevpham.png',
                      width: 300,
                      height: 300,
                      fit: BoxFit.cover,
                    ),
                  ),
                  AnimatedOpacity(
                    opacity: _isHovering ? 0.25 : 0.0,
                    duration: const Duration(milliseconds: 300),
                    child: Container(
                      width: 300,
                      height: 300,
                      decoration: BoxDecoration(
                        borderRadius: BorderRadius.circular(20),
                        gradient: const LinearGradient(
                          colors: [Colors.black87, Colors.transparent],
                          begin: Alignment.bottomCenter,
                          end: Alignment.topCenter,
                        ),
                      ),
                    ),
                  ),
                ],
              ),
            ),
          ),
        ),
      ),
    );
  }
}
