const vSource = `#version 300 es
    uniform vec2 u_translate;
    in vec4 a_position;
    in vec2 a_texcoord;
    out vec3 p_color;
    out vec2 p_texcoord;

    void main() {
        mat4 m_translate = mat4(
            1.0, 0.0, 0.0, 0.0,
            0.0, 1.0, 0.0, 0.0,
            0.0, 0.0, 1.0, 0.0,
            u_translate.x, u_translate.y, 0.0, 1.0
        );

        gl_Position = m_translate * a_position;
        p_texcoord = a_texcoord;
    }
`

const fSource = `#version 300 es
    precision highp float;
    uniform int mode;
    uniform vec3 u_color;
    uniform sampler2D t_sampler;
    in vec2 p_texcoord;
    out vec4 o_color;

    void main() {
        if (mode == 0) {
            o_color = vec4(u_color);
        } else {
            o_color = texture(t_sampler, p_texcoord); 
        }
    }
`

function glInit() {
    vShader = gl.createShader(gl.VERTEX_SHADER)
    gl.shaderSource(vShader, vSource)
    gl.compileShader(vShader)
    fShader = gl.createShader(gl.FRAGMENT_SHADER)
    gl.shaderSource(fShader, fSource)
    gl.compileShader(fShader)
    program = gl.createProgram()
    gl.attachShader(program, vShader)
    gl.attachShader(program, fShader)
    gl.linkProgram(program)
}
